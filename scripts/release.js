#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const ROOT = path.resolve(__dirname, '..')
const PKG_PATH = path.join(ROOT, 'package.json')
const LOCK_PATH = path.join(ROOT, 'package-lock.json')

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function parseArgs(argv) {
  const args = argv.slice(2)
  const out = {
    bump: 'patch', // patch|minor|major|x.y.z
    publish: false,
    tag: false,
    stageAll: false
  }

  for (let i = 0; i < args.length; i++) {
    const a = args[i]
    if (a === '--bump' || a === '-b') {
      out.bump = args[i + 1]
      i++
      continue
    }
    if (a === '--publish') {
      out.publish = true
      continue
    }
    if (a === '--tag') {
      out.tag = true
      continue
    }
    if (a === '--all') {
      out.stageAll = true
      continue
    }
    if (a === '--help' || a === '-h') {
      out.help = true
      continue
    }
    // allow: node scripts/release.js patch
    if (!a.startsWith('-') && !out._freeBumpSet) {
      out.bump = a
      out._freeBumpSet = true
    }
  }

  return out
}

function bumpSemver(oldVersion, bump) {
  const m = oldVersion.match(/^(\d+)\.(\d+)\.(\d+)$/)
  if (!m) {
    throw new Error(`Unsupported version format: ${oldVersion} (expected x.y.z)`)
  }
  let major = Number(m[1])
  let minor = Number(m[2])
  let patch = Number(m[3])

  if (/^\d+\.\d+\.\d+$/.test(bump)) {
    return bump
  }

  if (bump === 'patch') patch += 1
  else if (bump === 'minor') {
    minor += 1
    patch = 0
  } else if (bump === 'major') {
    major += 1
    minor = 0
    patch = 0
  } else {
    throw new Error(`Unsupported bump: ${bump} (use patch|minor|major|x.y.z)`)
  }

  return `${major}.${minor}.${patch}`
}

function updatePackageJsonVersion(oldVersion, newVersion) {
  const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf8'))
  if (pkg.version !== oldVersion) {
    throw new Error(`package.json version mismatch: expected ${oldVersion}, got ${pkg.version}`)
  }
  pkg.version = newVersion
  fs.writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 2) + '\n', 'utf8')
}

function updatePackageLockVersion(oldVersion, newVersion) {
  if (!fs.existsSync(LOCK_PATH)) return
  let lock = fs.readFileSync(LOCK_PATH, 'utf8')

  const topNeedle = `"name": "hydrogen-js-sdk",\n  "version": "${oldVersion}",`
  const topReplace = `"name": "hydrogen-js-sdk",\n  "version": "${newVersion}",`

  const pkgNeedle = `"name": "hydrogen-js-sdk",\n      "version": "${oldVersion}",`
  const pkgReplace = `"name": "hydrogen-js-sdk",\n      "version": "${newVersion}",`

  let replaced = 0
  if (lock.includes(topNeedle)) {
    lock = lock.replace(topNeedle, topReplace)
    replaced++
  }
  if (lock.includes(pkgNeedle)) {
    lock = lock.replace(pkgNeedle, pkgReplace)
    replaced++
  }

  if (replaced !== 2) {
    // fallback: try a generic targeted replace (still safer than rewriting whole lock file)
    const escapedOld = escapeRegExp(oldVersion)
    const r1 = new RegExp(`("name"\\s*:\\s*"hydrogen-js-sdk"\\s*,\\s*\\n\\s*"version"\\s*:\\s*")${escapedOld}(")`)
    const r2 = new RegExp(`("name"\\s*:\\s*"hydrogen-js-sdk"[\\s\\S]*?\\n\\s*"version"\\s*:\\s*")${escapedOld}(")`)

    const before = lock
    lock = lock.replace(r1, `$1${newVersion}$2`)
    lock = lock.replace(r2, `$1${newVersion}$2`)
    if (lock === before) {
      throw new Error(`Failed to update package-lock.json version (${oldVersion} -> ${newVersion}).`)
    }
  }

  fs.writeFileSync(LOCK_PATH, lock, 'utf8')
}

function run(cmd, opts = {}) {
  execSync(cmd, { stdio: 'inherit', cwd: ROOT, ...opts })
}

function git(cmd) {
  return execSync(cmd, { stdio: 'pipe', cwd: ROOT }).toString('utf8').trim()
}

function gitIsInsideRepo() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore', cwd: ROOT })
    return true
  } catch {
    return false
  }
}

function main() {
  const args = parseArgs(process.argv)
  if (args.help) {
    console.log(`
Usage:
  node scripts/release.js --bump patch|minor|major|x.y.z [--tag] [--publish] [--all]

Examples:
  npm run release -- --bump patch
  npm run release -- --bump minor --tag
  npm run release -- --bump 2.7.3 --publish
  npm run release -- --bump patch --all
`.trim())
    process.exit(0)
  }

  if (!gitIsInsideRepo()) {
    throw new Error('Not a git repository. release script needs git.')
  }

  const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf8'))
  const oldVersion = pkg.version
  const newVersion = bumpSemver(oldVersion, args.bump)

  console.log(`Releasing: ${oldVersion} -> ${newVersion}`)

  updatePackageJsonVersion(oldVersion, newVersion)
  updatePackageLockVersion(oldVersion, newVersion)

  // Build dist with the bumped version
  run('npm run build')

  // Stage + commit (commit message includes the new version)
  if (args.stageAll) run('git add -A')
  else run('git add package.json package-lock.json dist')

  const stagedNames = git('git diff --cached --name-only')
  if (!stagedNames) {
    console.log('No staged changes to commit.')
    process.exit(0)
  }

  run(`git commit -m "chore(release): v${newVersion}"`)

  if (args.tag) {
    // Avoid failing when tag already exists.
    try {
      run(`git tag v${newVersion}`)
    } catch (e) {
      console.log(`Skip git tag v${newVersion} (tag may already exist).`)
    }
  }

  if (args.publish) {
    run('npm publish --access public')
  }
}

main()

