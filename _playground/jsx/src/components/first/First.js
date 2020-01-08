import React from 'react';
import logo from './logo.svg';
import './First.scss';

class First extends React.Component {
   
    render() {
        return (
          <div className="wrapper-component">
            <img src={logo} className="Clock-logo" alt="logo" />
        </div>
        );
    }
  }
  
  export default First;