import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import PropTypes from "prop-types";
import "react-circular-progressbar/dist/styles.css";

function CircularChart(props) {
  const { value, text } = props;
  const [inValue, setInValue] = useState(0);

  const onStartFunction = () => {
    setInValue(value);
  };

  useEffect(() => {
    // skillTimeLine.from(`.${text}`, {
    //   width: 0,
    //   height: 0,
    //   autoAlpha: 0,
    // });
    // skillTimeLine.to(`.${text}`, {
    //   width: 200,
    //   height: 200,
    //   ease: "elastic.out(1.3, 1)",
    //   autoAlpha: 1,
    //   duration: 0.5,
    //   onComplete: () => {
    //     onStartFunction();
    //   },
    // });
    onStartFunction();
  }, []);
  return (
    <div className={`${text}`} style={{ width: 200, height: 200 }}>
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
  // skillTimeLine: PropTypes.any.isRequired,
};

CircularChart.defaultProps = {
  title: 0,
  text: "",
};

export default CircularChart;
