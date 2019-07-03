module.exports = [{
      plugin: require('/Users/fabian/Desktop/my-carbon-site/node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/fabian/Desktop/my-carbon-site/node_modules/gatsby-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-unwrap-images"},{"resolve":"gatsby-remark-smartypants"},{"resolve":"gatsby-remark-images","options":{"maxWidth":1170,"linkImagesToOriginal":false,"quality":75,"withWebp":false}},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-copy-linked-files"}],"remarkPlugins":[null],"defaultLayouts":{"default":"/Users/fabian/Desktop/my-carbon-site/node_modules/gatsby-theme-carbon/src/templates/Default.js","home":"/Users/fabian/Desktop/my-carbon-site/node_modules/gatsby-theme-carbon/src/templates/Homepage.js"}},
    },{
      plugin: require('/Users/fabian/Desktop/my-carbon-site/node_modules/gatsby-theme-carbon/gatsby-browser.js'),
      options: {"plugins":[],"additionalFontWeights":["200","200i"]},
    }]
