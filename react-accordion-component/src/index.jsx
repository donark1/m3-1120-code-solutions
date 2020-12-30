/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  {
    id: 1,
    title: 'HyperText Markup Lanugage',
    content: 'Hypertext Markup Language (HTML) is the standard Markup language for creating web pages and web applications.With Cascading Style Sheets(CSS) and Javascript, it forms a triad of cornerstone technologies for the World Wide Web'
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and Javascript.'
  },
  {
    id: 3,
    title: 'JavaScript',
    content: 'Javascript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

ReactDOM.render(
  <Accordion topics={topics} />,
  document.querySelector('#root')
);