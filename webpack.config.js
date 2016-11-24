module.exports = {
  entry:  "./client.js",
  output: {
      filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules|app.js)/,
        loader: 'babel?presets[]=react'
      }
    ]
  }
};
