module.exports = {
  plugins: [
    require('postcss-cssnext'),
    require('postcss-import'),
    require('cssnano')({ autoprefixer: false }),
  ],
};
