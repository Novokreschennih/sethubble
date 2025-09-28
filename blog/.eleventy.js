const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  // Регистрируем плагины и шорткоды
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Копируем папки
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("static/img");

  // Фильтры (оставьте ваш код)
  eleventyConfig.addFilter("readableDate", dateObj => { /*...*/ });
  eleventyConfig.addFilter('machineDate', (dateObj) => { /*...*/ });
  eleventyConfig.addFilter("cssmin", function(code) { /*...*/ });

  // --- КЛЮЧЕВОЕ ИЗМЕНЕНИЕ ---
  // Создаем коллекцию "posts" вручную, указывая точный путь
  eleventyConfig.addCollection("posts", function(collectionApi) {
    // Искать все .md файлы в корневой папке "posts"
    return collectionApi.getFilteredByGlob("../posts/*.md");
  });
  // --- КОНЕЦ КЛЮЧЕВОГО ИЗМЕНЕНИЯ ---

  // Указываем пути для шаблонов
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
