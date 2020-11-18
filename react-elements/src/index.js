import React from 'react';
import ReactDom from 'react-dom';

const h1Element = React.createElement('h1', null, 'Hello, React!');

ReactDom.render(h1Element, document.getElementById('root'))
