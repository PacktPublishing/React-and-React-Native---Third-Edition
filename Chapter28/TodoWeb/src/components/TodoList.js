import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import Todo from './Todo';
import {MARK_ALL_TODOS, GET_USER} from '../constants';

const TodoList = ({user: {todos, totalCount, completedCount}}) => {
  const [markAllTodos] = useMutation(MARK_ALL_TODOS, {
    refetchQueries: [{query: GET_USER, variables: {userId: 'me'}}],
  });

  const handleMarkAllChange = () => {
    if (todos) {
      markAllTodos();
    }
  };

  return (
    <section className="main">
      <input
        checked={totalCount === completedCount}
        className="toggle-all"
        onChange={handleMarkAllChange}
        type="checkbox"
      />

      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

TodoList.propTypes = {
  user: PropTypes.shape({
    totalCount: PropTypes.integer,
    completedCount: PropTypes.int,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.integer,
      }),
    ),
  }),
};

export default TodoList;
