import React, { Component } from 'react';
import './MainView.css';

// import slide components
import SlideOne from '../../components/SlideOne';
import SlideTwo from '../../components/SlideTwo';
import SlideThree from '../../components/SlideThree';
import SlideFour from '../../components/SlideFour';
import SlideFive from '../../components/SlideFive';

class MainView extends Component {

  render() {

    return ( 
      <div class="outer-wrapper">
        <div class="wrapper">
          <SlideOne />
          <SlideTwo />
          <SlideThree />
          <SlideFour />
          <SlideFive />
        </div>
      </div>
    );
  }
}

export default MainView;