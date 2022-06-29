import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import PropTypes from "prop-types";
import "react-circular-progressbar/dist/styles.css";

// If you don't have a version of React that supports
// hooks, you can use a class-based version of this
// component in ProgressProviderUsingClass.js
function CircularChart(props) {
  const { value, text } = props;
  const [inValue, setInValue] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setInValue(value);
    setIsAnimated(!isAnimated);
  }, [value]);

  useEffect(() => {
    window.clearInterval(1000);
  }, []);

  return (
    <div id="progress" style={{ width: 200, height: 200 }}>
      <CircularProgressbarWithChildren
        initialAnimation={true}
        styles={buildStyles({
          // Colors
          pathColor: `rgba(62, 152, 199, ${66 / 100})`,
          textColor: "#f88",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
        value={inValue}
      >
        <div>{text}</div>
        <div>{inValue}%</div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

CircularChart.propTypes = {
  value: PropTypes.int,
  text: PropTypes.string,
};

CircularChart.defaultProps = {
  title: 0,
  text: "",
};

export default CircularChart;
