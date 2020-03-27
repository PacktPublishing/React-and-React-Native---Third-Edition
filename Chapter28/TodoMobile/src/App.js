import React from 'react';
import { View, Text } from 'react-native';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider, Query } from '@apollo/react-components';

import styles from './styles';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { GET_USER } from '../constants';

// Replace this value with the network IP address of your machine
const NETWORK_IP = '';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `http://${NETWORK_IP}:3000/graphql`,
});

export default () => (
  <ApolloProvider client={client}>
    <Query
      query={GET_USER}
      variables={{
        // Mock authenticated ID that matches database
        userId: 'me',
      }}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return <Text>Loading</Text>;
        }

        if (error) {
          return <Text>{error.message}</Text>;
        }

        return (
          <View style={styles.container}>
            <TodoInput />
            <TodoList user={data.user} />
          </View>
        );
      }}
    </Query>
  </ApolloProvider>
);
