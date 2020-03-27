import React, { Component } from 'react';
import { View } from 'react-native';

import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { user } = this.props;
    return (
      <View>
        {user.todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </View>
    );
  }
}

export default TodoList