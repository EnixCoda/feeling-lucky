const path = require("path");
const SizePlugin = require("size-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	devtool: "source-map",
	stats: "errors-only",
	entry: {
		background: "./source/background",
		content: "./source/content"
	},
	output: {
		path: path.join(__dirname, "distribution"),
		filename: "[name].js"
	},
	plugins: [
		new SizePlugin(),
		new CopyWebpackPlugin([
			{
				from: "**/*",
				context: "source",
				ignore: ["*.js"]
			}
		])
	],
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					mangle: false,
					compress: false,
					output: {
						beautify: true,
						indent_level: 2 // eslint-disable-line camelcase
					}
				}
			})
		]
	}
};
