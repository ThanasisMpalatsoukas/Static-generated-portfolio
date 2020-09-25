const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-components-templates-starter-pages-404-js": hot(preferDefault(require("/home/sakis/Desktop/gatsby/hello-world/src/components/Templates/Starter/Pages/404.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/sakis/Desktop/gatsby/hello-world/src/pages/using-typescript.tsx"))),
  "component---src-templates-starter-blog-post-js": hot(preferDefault(require("/home/sakis/Desktop/gatsby/hello-world/src/templates/Starter/blog-post.js"))),
  "component---src-templates-starter-single-post-js": hot(preferDefault(require("/home/sakis/Desktop/gatsby/hello-world/src/templates/Starter/single-post.js"))),
  "component---src-templates-starter-tag-js": hot(preferDefault(require("/home/sakis/Desktop/gatsby/hello-world/src/templates/Starter/tag.js")))
}

