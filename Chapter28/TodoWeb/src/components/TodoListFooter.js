import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import {GET_USER, REMOVE_COMPLETED_TODOS} from '../constants';

const TodoListFooter = ({user: {completedCount, totalCount}}) => {
  const [removeCompletedTodos] = useMutation(REMOVE_COMPLETED_TODOS, {
    refetchQueries: [{query: GET_USER, variables: {userId: 'me'}}],
  });

  const handleRemoveCompletedTodosClick = () => {
    removeCompletedTodos();
  };

  const numRemainingTodos = totalCount - completedCount;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{numRemainingTodos}</strong> item
        {numRemainingTodos === 1 ? '' : 's'} left
      </span>

      {completedCount > 0 && (
        <button
          className="clear-completed"
          onClick={handleRemoveCompletedTodosClick}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

TodoListFooter.propTypes = {
  user: PropTypes.shape({
    totalCount: PropTypes.integer,
    completedCount: PropTypes.int,
  }),
};

export default TodoListFooter;
