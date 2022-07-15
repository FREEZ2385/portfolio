import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import PropTypes from "prop-types";
import "./scss/progressBarArea.scss";

function ProgressBarArea(props) {
  const { value, text, color } = props;
  const [inValue, setInValue] = useState(0);

  const onStartFunction = () => {
    setInValue(value);
  };

  useEffect(() => {
    onStartFunction();
  }, []);

  return (
    <div className={`progress-bar-area progressbar_${text}`}>
      <div className="progress-bar-label">
        <span>{text}</span>
      </div>
      <ProgressBar
        completed={inValue}
        bgColor={color}
        width="32vw"
        height="20px"
        padding="6px"
      />
    </div>
  );
}

ProgressBarArea.propTypes = {
  value: PropTypes.int,
  text: PropTypes.string,
  color: PropTypes.string,
};

ProgressBarArea.defaultProps = {
  title: 0,
  text: "",
  color: "",
};

export default ProgressBarArea;
