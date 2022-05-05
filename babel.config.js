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
        "@components": "./src/components",
        "@core": "./src/core",
        "@models": "./src/models",
        "@shared": "./src/shared",
      }
    }],
  ]
};
