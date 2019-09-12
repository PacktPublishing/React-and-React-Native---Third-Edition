import React from "react";

const LoadingMessage = ({ loading }) => (loading ? <em>{loading}</em> : null);

export default ({ error, loading, users }) => (
  <section>
    <LoadingMessage loading={loading} />
    <ul>
      {users.map(user => (
        <li key={user.id.toUpperCase()}>{user.name}</li>
      ))}
    </ul>
  </section>
);
