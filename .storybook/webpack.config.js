module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{
      loader: 'babel-loader',
    }, {
      loader: 'react-docgen-typescript-loader'
    }, {
      loader: '@storybook/source-loader',
    }],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
