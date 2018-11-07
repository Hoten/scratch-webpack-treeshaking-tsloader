const webpack = require('webpack')
const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'ts-loader',
				sideEffects: false,
				test: /\.ts$/
			}
		]
	},
	devtool: 'none',
	resolve: {
		extensions: [".ts", ".js"]
	},
	mode: 'production',
	optimization: {
		usedExports: true
	}
}
