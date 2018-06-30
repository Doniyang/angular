var webpack = require('webpack'),
    path = require('path');
var ROOT = path.resolve(__dirname),
    APP = path.resolve(ROOT,'app'),
    BUILD = path.resolve(ROOT,'dist');
module.exports = {
	context : APP,
	entry : {
		app : ['webpack/hot/dev-server','./core/bootstrap.js']
	},
	output : {
      path : BUILD,
      filename : 'bundle.js'
	},
	module : {
		loaders : [
           {
           	  test : /\.css$/,
           	  loaders : ['style','css'],
           	  include : APP
           },{
              test : /\.js$/,
              loader : 'ng-annotate!babel?presets[]=es2015!jshint',
              exclude: /node_modules/
           },{
           	  test : /\.(png|gif|jpg)$/,
           	  loader : 'url-loader?limit=8192'
           }
		   ]
	},
	resolve: {
        extensions: ['', '.js', '.json'],
        alias:{
          bootstrapstyle : path.join(__dirname,'node_modules/bootstrap/dist/css/bootstrap.css')
        }
    },
    plugins: [  
       new webpack.HotModuleReplacementPlugin()
   ]

}