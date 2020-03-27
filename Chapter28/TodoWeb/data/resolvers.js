import {
  getUserByID,
  getTodos,
  addTodo,
  changeTodoStatus,
  markAllTodos,
  removeCompletedTodos,
  removeTodo,
  renameTodo,
} from './database';

const resolvers = {
  user: (_, context, {variableValues: {userId}}) => {
    const user = getUserByID(userId);
    const todos = getTodos();

    return {
      ...user,
      totalCount: todos.length,
      completedCount: todos.filter(({complete}) => complete === true).length, // Calculate completed Todos
      todos,
    };
  },
  addTodo: (_, context, {variableValues: {text}}) => {
    addTodo(text, false);

    return getTodos();
  },
  changeTodoStatus: (_, context, {variableValues: {id, complete}}) => {
    changeTodoStatus(id, complete);

    return getTodos();
  },
  markAllTodos: () => {
    markAllTodos();

    return getTodos();
  },
  removeCompletedTodos: () => {
    removeCompletedTodos();

    return getTodos();
  },
  removeTodo: (_, context, {variableValues: {id, status}}) => {
    removeTodo(id, status);

    return getTodos();
  },
  renameTodo: (_, contxt, {variableValues: {id, text}}) => {
    renameTodo(id, text);

    return getTodos();
  },
};

export default resolvers;
