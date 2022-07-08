module.exports = function (api) {
  api.cache(true);
  //bundles env vars / enables tailwind
  return {
    presets: ["babel-preset-expo"],
    plugins: ["tailwindcss-react-native/babel"],
  };
};
