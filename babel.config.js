const nativeWindBabel = require('nativewind/babel');

module.exports = function (api) {
  api.cache(true);

  const { plugins = [] } = nativeWindBabel();

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};

