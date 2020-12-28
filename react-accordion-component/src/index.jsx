/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';
import topics from './topics';

ReactDOM.render(
  <Accordion topics={topics} />,
  document.querySelector('#root')
);
