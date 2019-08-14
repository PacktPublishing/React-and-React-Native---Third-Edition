import React from 'react';
import { render as renderJSX } from 'react-dom';
import MyButton from './MyButton';
import MyList from './MyList';

const appState = {
  text: 'My Button',
  disabled: true,
  items: ['First', 'Second', 'Third']
};

function render(props) {
  renderJSX(
    <main>
      <MyButton text={props.text} disabled={props.disabled} />
      <MyList items={props.items} />
    </main>,
    document.getElementById('root')
  );
}

render(appState);

setTimeout(() => {
  appState.disabled = false;
  appState.items.push('Fourth');

  render(appState);
}, 1000);
