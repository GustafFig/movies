module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@controller': './src/controller',
        '@services': './src/services',
        '@utils': './src/utils',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
    '**/*.test.ts',
  ],
} 