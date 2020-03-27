import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Mutation } from '@apollo/react-components'

import styles from './styles';
import { GET_USER, ADD_TODO } from '../constants';

export default class App extends Component {
  render() {
    return (
      <Mutation
        mutation={ADD_TODO}
        refetchQueries={[{ query: GET_USER, variables: { userId: 'me' } }]}
      >
        {addTodo => (
          <TextInput
            style={styles.textInput}
            placeholder='What needs to be done?'
            onSubmitEditing={({ nativeEvent: { text } }) =>
              addTodo({ variables: { text } })
            }
          />
        )}
      </Mutation>
    );
  }
}
