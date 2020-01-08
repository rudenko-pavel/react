import React from 'react';
import './Clock.scss';

class Clock extends React.Component {
  state = { time: '' };

  componentDidMount() {
    this.update();
  }
  update = () => {
      setInterval(() => {
          this.setState({ time:new Date().toLocaleTimeString() } )
      },1000)
  }
  
  render() {
      return (
        <div className="Clock">
        <header className="Clock-header">
          <div className="wrapper-component">
            <h3>Component `Clock`</h3>
            <div className="time">Current Time: {this.state.time}
            </div>
          </div>
        </header>
      </div>
      );
  }
}

export default Clock;