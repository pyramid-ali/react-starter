const purgecss = require("@fullhuman/postcss-purgecss")({
    // Specify the paths to all of the template files in your project
    content: ["./src/**/*.tsx", "./public/index.html"],
  
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

        // Capture classes within other delimiters like .block(class="w-1/2") in Pug
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

        return broadMatches.concat(innerMatches)
    }
  });
  
  module.exports = {
    plugins: [
      require("tailwindcss"),
      require("autoprefixer"),
      ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
    ]
  };
  