import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import schema from './data/schema';
import resolvers from './data/resolvers';

const APP_PORT = 3000;

// Serve the application
const compiler = webpack({
  mode: 'development',
  entry: ['whatwg-fetch', path.resolve(__dirname, 'src', 'app.js')],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: '/',
  },
});

const app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  publicPath: '/src/',
  stats: {colors: true},
});

// Serve static resources
app.use('/', express.static(path.resolve(__dirname, 'public')));

// Setup GraphQL server
app.use(
  '/graphql',
  graphQLHTTP({
    schema: schema,
    rootValue: resolvers,
    pretty: true,
  }),
);

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});
