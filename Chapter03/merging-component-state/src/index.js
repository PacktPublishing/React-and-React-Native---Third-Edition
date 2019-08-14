import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

const myComponent = render(<MyComponent />, document.getElementById('root'));

setTimeout(() => {
  myComponent.setState({ first: 'done!' });
}, 1000);

setTimeout(() => {
  myComponent.setState({ second: 'done!' });
}, 2000);

setTimeout(() => {
  myComponent.setState({ third: 'done!' });
}, 3000);

setTimeout(() => {
  myComponent.setState(state => ({
    ...state,
    fourth: state.doneMessage
  }));
}, 4000);
