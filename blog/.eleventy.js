const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Копируем папки admin и static/img изнутри "blog" в итоговую сборку
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("static/img");

  // Фильтры
  eleventyConfig.addFilter("readableDate", dateObj => { /*...*/ }); // Оставьте ваш код фильтров
  eleventyConfig.addFilter('machineDate', (dateObj) => { /*...*/ });
  eleventyConfig.addFilter("cssmin", function(code) { /*...*/ });

  // Возвращаем правильные пути!
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".", // Искать файлы в текущей папке (blog)
      output: "_site" // Складывать результат в _site
    }
  };
};
