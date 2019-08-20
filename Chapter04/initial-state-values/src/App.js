import React, { Fragment, useState } from 'react';

export default function App() {
  const [name] = useState('Adam');
  const [age] = useState(35);

  return (
    <Fragment>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
    </Fragment>
  );
}
