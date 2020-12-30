/* eslint-disable no-console */
import React from 'react';


export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: null,
    openId: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ openId: event });
  }

  render() {
    const element = this.props.topics.map(topics => {
      return (
        <div event={topics.id} >
          <div event={topics.id} className='header' onClick={() => this.handleClick(topics.id)}>{topics.title}</div>
          {this.state.openId === topics.id ? (<div className='content'>{topics.content}</div>) : null }
        </div>
      );
    });
    return (
      <div>{element}</div>
    );
  }
}
