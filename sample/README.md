##weback + babel


####参考URL  
https://blog.mismithportfolio.com/web/20161017webpackbeginner


###このままでは動かないので下記を設定する
webpack.config.jsにて、ローベルをbabel代わりにbabel-loaderに変更する。

```
loader: 'babel'
↓
loader: 'babel-loader'

```