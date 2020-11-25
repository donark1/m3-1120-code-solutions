import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ numberOfClicks: this.state.numberOfClicks + 1 }));
  }

  render() {
    const clicks = this.state.numberOfClicks;
    let buttonClass;
    if (clicks >= 3 && clicks < 6) {
      buttonClass = 'purple';
    } else if (clicks >= 6 && clicks < 9) {
      buttonClass = 'lavender';
    } else if (clicks >= 9 && clicks < 12) {
      buttonClass = 'pink';
    } else if (clicks >= 12 && clicks < 15) {
      buttonClass = 'lightOrange';
    } else if (clicks >= 15 && clicks < 18) {
      buttonClass = 'yellow';
    } else {
      buttonClass = 'white';
    }
    return (
      <div>
        <button className={buttonClass} onClick={this.handleClick}>Hot Button</button>
      </div>
    );
  }
}
