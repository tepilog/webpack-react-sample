const path = require('path')

module.exports = {
  entry: './src/index.tsx', // 最初に読み込むファイルを指定
  module: { // webpack に対してビルド時に追加で行う処理。tsファイルに、ts-loaderを実行する
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/, // 対象除外ファイル
      },
    ],
  },
  resolve: { // モジュールとして解決するファイルの拡張子を指定
    extensions: ['.js','.ts','.tsx'], // 追記
  },
  output: { // 出力するファイルの設定
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/', // ディレクトリも自動追加
  },
  devServer: {
    hot: true, // ファイルを変更すると自動的にブラウザに反映させるフラグ
    open: true, // 起動時にブラウザで開くフラグ
  }
}
