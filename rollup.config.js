import path from 'path';
import resolve from 'rollup-plugin-node-resolve'; // 依赖引用插件
import commonjs from 'rollup-plugin-commonjs'; // commonjs模块转换插件
import { eslint } from 'rollup-plugin-eslint'; // eslint插件
import ts from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import packageJSON from './package.json';
import livereload from 'rollup-plugin-livereload';
import babel from 'rollup-plugin-babel';

const getPath = (_path) => path.resolve(__dirname, _path);
const extensions = ['.js', '.ts', '.tsx'];
// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
  extensions,
});

// eslint
const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**'],
});

// 基础配置
const commonConf = {
  input: getPath('./src/index.ts'),
  plugins: [
    resolve(extensions),
    commonjs(),
    esPlugin,
    tsPlugin,
    babel({
      exclude: [/\/core-js\//],
      runtimeHelpers: true,
      sourceMap: true,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts'],
    }),
    livereload(),
    serve({
      open: false, // 是否打开浏览器
      contentBase: './', // 入口html的文件位置
      historyApiFallback: true, // Set to true to return index.html instead of 404
      host: 'localhost',
      port: 1024,
    }),
  ],
};

if (process.env.NODE_ENV === 'development') {
  console.log('开发环境');
}

// 需要导出的模块类型
const outputMap = [
  {
    file: packageJSON.main, // 通用模块
    format: 'umd',
  },
  // {
  //   file: packageJSON.module, // es6模块
  //   format: 'es',
  // },
];

const buildConf = (options) => Object.assign({}, commonConf, options);

const config = outputMap.map((output) =>
  buildConf({ output: { name: packageJSON.name, ...output } })
);

export default config;
