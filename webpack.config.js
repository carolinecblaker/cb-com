const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
	  main: './src/index.js',
	  styles:'./src/assets/css/style.css'
	  
  },
  optimization: {
    runtimeChunk: 'single'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
	    {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         type: 'asset/resource',
         generator: {
           filename: 'fonts/[name][ext]'
         }
       },
      {
        test: /\.css$/,
      
     
          use: [
            MiniCssExtractPlugin.loader, 
           
          {
            loader: 'css-loader',
            options: {
                importLoaders: 1
            }
        },
        {
            loader: 'postcss-loader',
            options: {
              
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    require('autoprefixer'),
                 
                  ],
                ],
              }
              
            }
        }
          ],
     
      },
       {
         test: /\.(png|svg|jpe?g|gif)$/,
         use:[{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/'
            }
          }]
       }
     ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:'[name].css'
    }),
    new HtmlWebpackPlugin({
	    filename: 'index.html',
      template: 'src/index.html'
    }),
  ],
  output: {
	  filename:'[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    watchFiles: ['src/**/*.php', 'src/*.html', 'src/assets/**/*.css'],
    open: true,
    hot: true,
    port:"8008"
  }
}
