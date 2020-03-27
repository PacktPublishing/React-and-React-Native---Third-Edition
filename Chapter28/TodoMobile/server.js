const express = require('express');
const graphQLHTTP = require('express-graphql');
const path = require('path');
const schema = require('./data/schema');
const resolvers = require('./data/resolvers');

const APP_PORT = 3000;

const app = express()

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
