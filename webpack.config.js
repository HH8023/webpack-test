const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	// entry: './src/index.js',
	// 输入的文件
	entry: {
		// app: './src/index.js',
		// print: './src/print.js'
		app: './src/index.js'
	},
    // 可以指示出在哪个文件的哪一行的错误，仅用于开发环境
	devtool: 'inline-source-map',
	// 编译之后自动刷新页面,其实是起了一个服务器进行监测
	devServer: {
		contentBase: './dist',
		hot: true // 热更新
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	// 输出的路径和文件名
	output: {
		// filename: 'main.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'  // 确保文件资源在ip下访问
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.css$/,
	// 			use: [
	// 				'style-loader',
	// 				'css-loader'
	// 			]
	// 		},
	// 		{
	// 			test: /\.(png|svg|jpg|gif)$/,
	// 			use: [
	// 				'file-loader'
	// 			]
	// 		},
	// 		{
	// 			test: /\.(woff|woff2|eot|ttf|otf)$/,
	// 			use: [
	// 				'file-loader'
	// 			]
	// 		},
	// 		{
	// 			test: /\.(csv|tsv)$/,
	// 			use: [
	// 				'csv-loader'
	// 			]
	// 		},
	// 		{
	// 			test: /\.xml$/,
	// 			use: [
	// 				'xml-loader'
	// 			]
	// 		}
	// 	]
	// }
};