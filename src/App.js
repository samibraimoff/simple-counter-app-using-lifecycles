import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    isCounting: false,
  };

  componentDidMount() {
    const userCount = localStorage.getItem('timer');
    if (userCount) {
      this.setState({ counter: +userCount });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('timer', this.state.counter);
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
  }

  handleStart = () => {
    this.setState({ isCounting: true });

    this.counterId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  };

  handleStop = () => {
    this.setState({ isCounting: false });
    clearInterval(this.counterId);
  };

  handleReset = () => {
    this.setState({ counter: 0, isCounting: false });
    clearInterval(this.counterId);
  };

  render() {
    return (
      <div className='App'>
        <h1>Timer</h1>
        <h2>{this.state.counter}</h2>
        <div>
          {!this.state.isCounting ? (
            <button onClick={this.handleStart}>start</button>
          ) : (
            <button onClick={this.handleStop}>end</button>
          )}
          <button onClick={this.handleReset}>reset</button>
        </div>
      </div>
    );
  }
}

export default App;
