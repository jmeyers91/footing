const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.resolve(__dirname, '..', 'stories');
const TSCONFIG_PATH = path.resolve(__dirname, '..', 'tsconfig.json');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: TSCONFIG_PATH
        }
      },
      { loader: require.resolve('react-docgen-typescript-loader') }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
