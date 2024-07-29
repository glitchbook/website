const { DateTime } = require("luxon")
const pluginSEO = require("eleventy-plugin-seo")
const mila = require("markdown-it-link-attributes")

module.exports = function(eleventyConfig) {
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(mila, {
    matcher(href) { return href.match(/^https?:\/\//) },
    attrs: { target: "_blank" },
  }))
  
  eleventyConfig.setTemplateFormats([
    // Templates
    "html", "xml", "njk", "md",
    // Static Assets
    "css", "js", "jpeg", "jpg", "png", "svg", "woff", "woff2"
  ])
  eleventyConfig.addPassthroughCopy("public")

  const projects = require("./_data/projects.json")
  eleventyConfig.addCollection("projects", function() { return projects })

  const stats = require("./_data/stats.json")
  eleventyConfig.addCollection("stats", function() { return stats })

  const symbols = require("./_data/symbols.json")
  eleventyConfig.addCollection("symbols", function() { return symbols })

  // Filters let you modify the content https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd")
  })

  eleventyConfig.setBrowserSyncConfig({ ghostMode: false })

  return {
    dir: {
      input: "src",
      input: "src/media",
      includes: "_includes",
      output: "build"
    }
  }
}
