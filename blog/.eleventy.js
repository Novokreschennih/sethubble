const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Эта команда копирует файлы стилей, картинки и админку в итоговый сайт
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Фильтр для форматирования даты в читаемый вид (напр. 14 Apr 2021)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  // Фильтр для форматирования даты для HTML-атрибута <time> (напр. 2021-04-14)
  // ЭТОТ ФИЛЬТР РЕШАЕТ ВАШУ ГЛАВНУЮ ОШИБКУ
  eleventyConfig.addFilter('machineDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-MM-dd');
  });

  // Указываем Eleventy, где брать исходники и куда складывать результат
  return {
    // Markdown файлы будут обрабатываться шаблонизатором Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
