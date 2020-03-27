import React from 'react';
import {gql} from 'apollo-boost';
import {Mutation} from '@apollo/react-components';
import PropTypes from 'prop-types';

import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';
import TodoTextInput from './TodoTextInput';
import {GET_USER, ADD_TODO} from '../constants';

const TodoApp = ({user}) => {
  const hasTodos = user.totalCount > 0;

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>

          <Mutation
            mutation={ADD_TODO}
            refetchQueries={[{query: GET_USER, variables: {userId: 'me'}}]}>
            {addTodo => (
              <TodoTextInput
                className="new-todo"
                onSave={text => addTodo({variables: {text}})}
                placeholder="What needs to be done?"
              />
            )}
          </Mutation>
        </header>

        <TodoList user={user} />
        {hasTodos && <TodoListFooter user={user} />}
      </section>
    </div>
  );
};

TodoApp.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    totalCount: PropTypes.integer,
    completedCount: PropTypes.int,
    todos: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default TodoApp;
