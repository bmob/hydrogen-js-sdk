module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false,
      },
    ],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    '@babel/plugin-transform-typescript',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ],
};
