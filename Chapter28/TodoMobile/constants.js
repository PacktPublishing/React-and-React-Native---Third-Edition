import {gql} from 'apollo-boost';

export const GET_USER = gql`
  query GetUser($userId: String) {
    user(id: $userId) {
      id
      totalCount
      completedCount
      todos {
        id
        text
        complete
      }
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($text: String) {
    addTodo(text: $text) {
      id
    }
  }
`;

export const CHANGE_TODO_STATUS = gql`
  mutation ChangeTodoStatus($id: Int!, $complete: Boolean) {
    changeTodoStatus(id: $id, complete: $complete) {
      id
      complete
    }
  }
`;