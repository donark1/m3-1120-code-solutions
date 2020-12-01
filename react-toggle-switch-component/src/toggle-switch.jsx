import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isClicked: false }));
  }

  render() {
    return (
      <div>
        <label className={'switch'}>
          <input type={'checkbox'} checked={this.state.isClicked} onChange={this.handleClick}/>
          <span className={'toggle round'}></span>
        </label>
        <span>{this.state.isClicked ? 'ON' : 'OFF'}</span>
      </div>
    );
  }
}
