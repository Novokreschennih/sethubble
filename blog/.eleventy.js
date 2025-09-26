const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Копируем статические файлы: админку, стили, картинки
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("static/css");
  eleventyConfig.addPassthroughCopy("static/img");

  // Фильтр для форматирования даты в читаемый вид
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  // Фильтр для форматирования даты для HTML-атрибута <time>
  eleventyConfig.addFilter('machineDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-MM-dd');
  });

  // Указываем Eleventy, где брать исходники и куда складывать результат
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    
    dir: {
      input: ".", // Искать файлы в текущей директории (blog/)
      output: "_site" // Складывать результат в _site
    }
  };
};
