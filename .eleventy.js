const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");



module.exports = (config) => {


// liquidjs

let { Liquid } = require("liquidjs")
	let options = {
		extname: ".liquid",
		dynamicPartials: true,
		strict_filters: true,
		root: ["_includes"]
	}
  
config.setLibrary("liquid", new Liquid(options))


// syntax highlight plugin

config.addPlugin(syntaxHighlight);



// front matter 

config.setFrontMatterParsingOptions({
  excerpt: true,
  excerpt_separator: "<!-- excerpt -->",
});
config.setTemplateFormats(["jpg", "png", "webp", "md", "njk", "liquid"]);



// browsersync

config.setBrowserSyncConfig({
  files: ["dist/**/*"],
  open: true,

 
  // Open the site in Vivaldi & Firefox
  browser: ["vivaldi", "firefox"]
  

});



// more configuration
config.setDataDeepMerge(true);






// copy file from src to dist

config.addPassthroughCopy( "src/assets/image");
config.addPassthroughCopy( "src/assets/favicon");
config.addPassthroughCopy( "src/admin");


  // input, output folder

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};







