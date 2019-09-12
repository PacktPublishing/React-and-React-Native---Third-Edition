import React from "react";

const ErrorMessage = ({ error }) => (error ? <strong>{error}</strong> : null);
const LoadingMessage = ({ loading }) => (loading ? <em>{loading}</em> : null);

export default ({ error, loading, users }) => (
  <section>
    <ErrorMessage error={error} />
    <LoadingMessage loading={loading} />
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </section>
);
