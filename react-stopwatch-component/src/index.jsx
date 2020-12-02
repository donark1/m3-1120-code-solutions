import React from 'react';
import ReactDOM from 'react-dom';

const formattedSeconds = sec =>
  Math.floor(sec);

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0, lastClearedIncrementer: null };
    this.incrementer = null;
  }

  handleStartClick() {
    this.incrementer = setInterval(() =>
      this.setState({ secondsElapsed: this.state.secondsElapsed + 1 })
    , 1000);
  }

  handlePauseClick() {
    clearInterval(this.incrementer);
    this.setState({ lastClearedIncrementer: this.incrementer });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({ secondsElapsed: 0 });
  }

  render() {
    return (
      <div>
        <div className="circle" onClick={this.handleResetClick.bind(this)} >
          <h1 className="timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
        </div>
        <div className="play-pause-button">{(this.state.secondsElapsed === 0 || this.incrementer === this.state
          .lastClearedIncrementer ? <Button onClick={this.handleStartClick.bind(this)}><i className="fa fa-play">
          </i></Button> : <Button onClick={this.handlePauseClick.bind(this)}><i className="fa fa-pause"></i></Button>)}
        </div>
      </div>
    );
  }
}

const Button = props =>
  <button type="button" {...props} className={'btn ' + props.className} />;

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
);
