import React from 'react'
import colors from '../assets/colors.js';
import { Svg } from 'expo';

class CameraButtonSVG extends React.Component {
  render() {
    const { Circle } = Svg;

    return (
      <Svg height="100" width="100">
        <Circle
          cx="50"
          cy="50"
          r="30"
          stroke={colors.white}
          strokeWidth="5"
          fill="none"
        />

        <Circle
          cx="50"
          cy="50"
          r="25"
          strokeWidth="0"
          fill={colors.white}
        />
      </Svg>
    );
  }
};

export default CameraButtonSVG;
