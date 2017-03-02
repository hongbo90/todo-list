var webpack = require('webpack');

module.exports = {
	entry:'./app.jsx',
	output:{
		filename:'bundle.js'
	},
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true
	},
	module:{
		loaders:[
			{
				test:/\.jsx$/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']
				}
			}
		]
		
	},
	resolve:{
		extensions:['.js','.jsx']
	}
}