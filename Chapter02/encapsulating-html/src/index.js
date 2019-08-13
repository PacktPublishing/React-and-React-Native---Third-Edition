import React, { Component } from 'react';
import { render } from 'react-dom';

class MyComponent extends Component {
  render() {
    return (
      <section>
        <h1>My Component</h1>
        <p>Content in my component...</p>
      </section>
    );
  }
}

render(<MyComponent />, document.getElementById('root'));
