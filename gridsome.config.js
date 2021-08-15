const postcssNested = require("postcss-nested");
const tailwind = require("tailwindcss");
const postcssPlugins = [tailwind(), postcssNested];

module.exports = {
  siteName: "Office of Creative Space",
  siteUrl: "https://officeofcreativespace.com/",
  siteDescription: "Office of Creative Space",
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
