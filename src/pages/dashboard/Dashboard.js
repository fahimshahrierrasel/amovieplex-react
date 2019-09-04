import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <AutoPlaySwipeableViews style={{ width: '100%', height: '400px' }}>
          <div><img src="https://pixabay.com/get/50e9d5414351b108feda8460825668204022dfe05556774b74287ed0/sky-690293_1920.jpg" alt="" /></div>
          <div><img src="https://pixabay.com/get/52e4d1424355a414f6d1867dda6d49214b6ac3e45657764f772e7ed69f/mountains-4441978_1920.jpg" alt="" /></div>
          <div><img src="https://pixabay.com/get/57e9d5434f57b108f5d08460825668204022dfe05556774b74277ad7/dawn-190055_1280.jpg" alt="" /></div>
        </AutoPlaySwipeableViews>
      </div>
    );
  }
}