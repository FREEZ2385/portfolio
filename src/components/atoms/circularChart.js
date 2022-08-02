import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import "aos/dist/aos.css";
import PropTypes from "prop-types";
import "react-circular-progressbar/dist/styles.css";

function CircularChart(props) {
  const { value, text, color, icon } = props;
  const [inValue, setInValue] = useState(0);

  useEffect(() => {
    document.addEventListener("aos:in:circular-chart", () => {
      setInValue(value);
    });

    document.addEventListener("aos:out:circular-chart", () => {
      setInValue(0);
    });
  }, []);
  return (
    <div
      className={`${text}`}
      data-aos="zoom-in"
      data-aos-id="circular-chart"
      data-aos-once="true"
      data-aos-easing="ease-in-out-back"
      style={{ width: "80%", height: "80%" }}
    >
      <CircularProgressbarWithChildren
        initialAnimation={true}
        styles={buildStyles({
          // Colors
          pathColor: `${color}`,
          textColor: "#f88",
          trailColor: "#d6d6d6",

          pathTransitionDuration: 1.5,
        })}
        value={inValue}
      >
        <img src={icon} alt="image" width="40%" height="30%" />
        <div>{text}</div>
        <div style={{ display: "flex", fontSize: "1em" }}>{inValue}%</div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

CircularChart.propTypes = {
  value: PropTypes.int,
  text: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  // skillTimeLine: PropTypes.any.isRequired,
};

CircularChart.defaultProps = {
  title: 0,
  text: "",
  color: "",
  icon: "",
};

export default CircularChart;
