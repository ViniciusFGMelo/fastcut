# fastcut

npm i -D styled-components@5.3.10
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install @react-navigation/bottom-tabs
npm install @react-native-async-storage/async-storage
npm install @react-native-community/geolocation

npm install react-native-permissions
**
android>app>src>main> AndroidManifest.xml 
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

**

npm install --dev react-native-svg-transformer
**
npm WARN config dev Please use --include=dev instead.
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, 
so this library is deprecated. See the compatibility table on 
MDN: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility

**??????npm install react-native-svg-transformer novamente??????**

**
em metro.config.js: 

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();

**




