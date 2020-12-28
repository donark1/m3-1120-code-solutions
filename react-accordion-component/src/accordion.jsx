/* eslint-disable no-console */
import React from 'react';
import topics from './topics';

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
      </div>
    );
  }
}

export default class Accordion extends React.Component {
  render() {
    return (
      <div>
        <Collapse topics={topics} title={topics.title}>
          <div>
            <p>{topics.content}</p>
          </div>
        </Collapse>
      </div>
    );
  }
}
