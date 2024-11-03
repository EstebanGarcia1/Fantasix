const CracoSassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: CracoSassResourcesLoader,
      options: {
        resources: './src/styles/global.scss', // Ruta al archivo que deseas cargar globalmente
      },
    },
  ],
};
