module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["module-resolver", {
      "root": ["./"],
      "alias": {
        "@assets": "./src/assets",
        "@hooks": "./src/hooks",
        "@contexts": "./src/contexts",
        "@constants": "./src/constants",
        "@theme": "./src/theme",
        "@features": "./src/features",
      }
    }],
  ]
};
