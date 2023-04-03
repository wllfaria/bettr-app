module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            themes: './src/themes',
            routers: './src/routers',
            utils: './src/utils',
            pages: './src/pages',
            components: './src/components',
            types: './src/types',
            hooks: './src/hooks',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
