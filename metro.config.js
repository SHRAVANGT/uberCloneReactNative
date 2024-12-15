const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "/home/shravan/code_files/e/GPPG/react-native/uberCloneReactNative/app/(tabs)/global.css" });