const withTM = require('next-transpile-modules')([
  '@pizza-juice/button',
  '@pizza-juice/spinner',
  '@pizza-juice/visually-hidden',
  '@pizza-juice/system',
  '@pizza-juice/theme',
  '@pizza-juice/utils',
  '@pizza-juice/provider',
]);

module.exports = withTM({
  reactStrictMode: true,
});
