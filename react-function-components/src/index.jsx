import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = () => {
  return <button>Click me!</button>;
};

ReactDOM.render(
  CustomButton(),
  document.getElementById('root')
);
