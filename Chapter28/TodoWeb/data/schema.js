const {buildSchema} = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Todo {
        id: Int!
        text: String!
        complete: Boolean
    }
    type User {
        id: ID!
        totalCount: Int!
        completedCount: Int!
        todos: [Todo]!
    }
    type Query {
        user(id: String): User
    }
    type Mutation {
        addTodo(text: String): [Todo]
        changeTodoStatus(id: Int!, complete: Boolean): [Todo]
        markAllTodos: [Todo]
        removeCompletedTodos: [Todo]
        removeTodo(id: Int!): [Todo]
        renameTodo(id: Int!, text: String): [Todo]
    }
`);

module.exports = schema;
