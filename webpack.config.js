const path = require( 'path' );
const webpack = require( 'webpack' );

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

module.exports = {
	mode: 'development',
	entry: './src/components/index.js',

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve( __dirname, 'dist' ),
	},

	plugins: [ new webpack.ProgressPlugin() ],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				// exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', '@babel/preset-react' ],
						plugins: [ 'syntax-dynamic-import' ],
					},
				},
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ],
			},
		],
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/,
				},
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true,
		},
	},

	devServer: {
		open: true,
	},
};
