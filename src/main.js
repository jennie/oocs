require("~/css/main.css");
require("~/css/pitch.css");

import DefaultLayout from "~/layouts/Default.vue";
export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.component("Layout", DefaultLayout);

  var unified = require("unified");
  var markdown = require("remark-parse");
  var smartypants = require("retext-smartypants");
  var remark2rehype = require("remark-rehype");
  var breaks = require("remark-breaks");
  var html = require("rehype-stringify");

  Vue.mixin({
    methods: {
      md: function(input) {
        var processor = unified()
          .use(markdown)
          .use(breaks)
          .use(smartypants)
          .use(remark2rehype)
          .use(html);
        return processor.processSync(input).toString();
      },
    },
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://assets.calendly.com/assets/external/widget.css",
  });
  head.script.push({
    src: "https://assets.calendly.com/assets/external/widget.js",
    async: true,
  });
  head.script.push({
    src: "https://cdn.usefathom.com/script.js",
    defer: true,
    site: "QQROJGTV",
  });
  head.htmlAttrs = { lang: "en" };
  head.bodyAttrs = {
    class: "subpixel-antialiased",
  };
}
