##weback + babel

####参考URL  
https://blog.mismithportfolio.com/web/20161017webpackbeginner

###src内のapp.js（es2015で記述）をコンパイルする

###コンパイル方法
```text

cd sample

./node_modules/.bin/webpack
```

###コンパイルエラーが出る
```text
ERROR in ./src/app.js
Module build failed: Error: The node API for `babel` has been moved to `babel-core`.
```

###対策：下記を設定する
webpack.config.jsにて、ローベルをbabel代わりにbabel-loaderに変更する。

```
loader: 'babel'
↓
loader: 'babel-loader'

```

###コンパイル結果
publickディレクトリにbunble.jsが吐き出される。