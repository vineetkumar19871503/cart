var path = require('path');
var entry = path.resolve(__dirname, 'src');
var out = path.resolve(__dirname, 'src/public');

module.exports = {
	entry:entry+'/client.js',
	devtool: "inline-sourcemap",
	output:{
		path:out+'/js',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				 test: /\.(js|jsx)$/,
				 exclude:/node_modules/,
				 loader:'babel-loader',
				 query:{
				 	presets:['babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-2']
				 }
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
		]
	}
}