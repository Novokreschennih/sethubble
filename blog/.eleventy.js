const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation"); // <-- 1. Импортируем плагин

module.exports = function(eleventyConfig) {

  // 2. Регистрируем плагин в Eleventy
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Копируем статические файлы
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("static/css");
  eleventyConfig.addPassthroughCopy("static/img");

  // Фильтры
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter('machineDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-MM-dd');
  });
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Указываем Eleventy, где брать исходники
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
