module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "@assets": "./src/assets",
          "@hooks": "./src/hooks",
          "@contexts": "./src/contexts",
          "@constants": "./src/constants",
          "@theme": "./src/theme",
          "@features/*": "./src/features",
        }
      }],
    ]
  };
};
