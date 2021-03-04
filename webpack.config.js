/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const dotenv = require('dotenv')

const getEnvKeys = () => {
  const env = dotenv.config().parsed
  if (!env) return

  return Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})
}

const envKeys = getEnvKeys()

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }],
    }),
    envKeys ? new webpack.DefinePlugin(envKeys) : null,
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.build.json',
          compilerOptions: {
            noEmit: false,
          },
        },
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/],
      },
      {
        test: /.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',

            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.build.json',
      }),
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true,
    historyApiFallback: true,
    open: true,
    host: 'localhost',
  },
}
