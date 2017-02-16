const path = require('path');

module.exports = {


    //entryは対象ファイル、outputは書き出しファイル
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        //loaderを使えば何でもかんでもjsに変換
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};