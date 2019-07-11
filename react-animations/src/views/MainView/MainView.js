import React, { Component } from 'react';
import './MainView.css';

class MainView extends Component {

  render() {

    return ( 
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one"></div>
          <div class="slide two"></div>
          <div class="slide three"></div>
          <div class="slide four"></div>
        </div>
      </div>
    );
  }
}

export default MainView;