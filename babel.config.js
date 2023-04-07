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
            i18n: './src/i18n',
            services: './src/services',
            contexts: './src/contexts',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
