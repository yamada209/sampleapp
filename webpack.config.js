const path = require('path');
	
module.exports = {
	mode: 'development',
	// エントリポイントの設定
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, "dest", "js"),
		filename: "index.js"
	},
	module: {
		rules: [
			{ // babel用の設定
			  test: /\.js$/,
			  // node_modules以下は対象から外す
			  exclude: /node_modules/, 
			  use: [
				{
				  // Babel を利用する
				  loader: "babel-loader",
				  // Babel のオプションを指定する
				  options: {
					presets: [
					  // プリセットを指定することで、ES2020 を ES5 に変換
					  "@babel/preset-env",
					  // React の JSX を解釈
					  "@babel/react"
					]
				  }
				}
			  ]
			}
		  ]
	},
	  // ES5(IE11等)向けの指定（webpack 5以上で必要）
	  target: ["web", "es6"],
};