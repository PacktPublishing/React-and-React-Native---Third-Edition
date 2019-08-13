import React from 'react';
import { render } from 'react-dom';

render(
  <section>
    <header>
      <h1>A Header</h1>
    </header>
    <nav>
      <a href="item">Nav Item</a>
    </nav>
    <main>
      <p>The main content...</p>
    </main>
    <footer>
      <small>&copy; 2019</small>
    </footer>
  </section>,
  document.getElementById('root')
);
