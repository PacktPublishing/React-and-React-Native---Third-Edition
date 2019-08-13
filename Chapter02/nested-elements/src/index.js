import React from 'react';
import { render } from 'react-dom';

import MySection from './MySection';
import MyButton from './MyButton';

render(
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>,
  document.getElementById('root')
);
