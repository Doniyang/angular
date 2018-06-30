const webpack = require('webpack'),
      path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname),
      APP = path.resolve(ROOT,'src'),
      DIST = path.resolve(ROOT,'dist');

module.exports = {
	context : APP,
	entry : {
		polyfills : './polyfills.ts',
		vendor : './vendor.ts',
		app : './index.ts'
	},
	output : {
		path : DIST,
		filename : '[name].js',
		publicPath : 'http://localhost:8080/',
		chunkFilename: '[id].chunk.js'
	},
	module : {
		rules : [
           {
              test : /\.ts$/,
              exclude: [/\.(spec|e2e)\.ts$/],
              use : [
                 {
                   loader:'@angularclass/hmr-loader'
                 },{
                 	 loader : 'awesome-typescript-loader'
                 },{
                 	 loader : 'angular2-template-loader'
                 }
              ]
           },{
               test: /\.css$/,
               use: ['style-loader', 'css-loader']
           },{
               test: /\.html$/,
               use: ['html-loader'],
           },{
              test: /\.(jpg|png|gif)$/,
              use: [
                {
                	loader : 'babel-loader',
                	options:{
                		limit : 30000
                	}
                }
              ]
           }
		]
	},
	 resolve: {
      extensions: ['.ts', '.js'],
      modules: [path.resolve(ROOT,'src'),path.resolve(ROOT,'node_modules')]
    },
    devServer: {
       historyApiFallback: true,
       stats: 'minimal',
       inline : true,
       hot : true
    },
    plugins : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
         name: ['app', 'vendor', 'polyfills']
      }),
      new HtmlWebpackPlugin({
         template: './index.html'
      })
    ]
}