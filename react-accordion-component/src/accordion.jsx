/* eslint-disable no-console */
import React from 'react';

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <div onClick={this.togglePanel} className='header'>
          {this.props.title}</div>
        {this.state.open ? (
          <div className='content'>
            {this.props.children}
          </div>
        ) : null}
      </div>);
  }
}

export default class Accordian extends React.Component {
  render() {
    return (<div>
      <Collapse title="Hypertext Markup Language">
        <div>
          <p>Hypertext Markup Language (HTML) is the standard Markup
            language for creating web pages and web applications. With Cascading Style Sheets (CSS) and Javascript, it forms a triad of cornerstone technologies for the World Wide Web.</p>
        </div>
      </Collapse>
      <Collapse title="Cascading Style Sheets">
        <div>
          <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and Javascript.</p>
        </div>
      </Collapse>
      <Collapse title="Javascript">
        <div>
          <p>Javascript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
        </div>
      </Collapse>
    </div>
    );
  }
}
