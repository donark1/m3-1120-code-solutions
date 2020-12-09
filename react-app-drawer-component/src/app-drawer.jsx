import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <body className="grayBackground">
          <div className="menu-container">
            <div ckassName="linkLists">
              <h1><a href="">Menu</a></h1>
              <p><a href="">About</a></p>
              <p><a href="">Get Started</a></p>
              <p><a href="">Sign In</a></p>
            </div>
          </div>
        </body>
      );
    } else {
      return (
        <div className="container" onClick={this.handleClick}>
          <div className="hamburgerMenu-container">
            <div className="hamburgerMenu"></div>
            <div className="hamburgerMenu"></div>
            <div className="hamburgerMenu"></div>
          </div>
        </div>
      );
    }
  }
}
