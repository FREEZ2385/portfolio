import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import PropTypes from "prop-types";
import "./scss/progressBarArea.scss";
import "aos/dist/aos.css";
import { Grid } from "@mui/material";

function ProgressBarArea(props) {
  const { value, text, color } = props;
  const [inValue, setInValue] = useState(0);

  useEffect(() => {
    document.addEventListener("aos:in:progress-bar", () => {
      setInValue(value);
    });

    document.addEventListener("aos:out:progress-bar", () => {
      setInValue(0);
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-id="progress-bar"
      data-aos-once="true"
      data-aos-easing="ease-in-out-back"
      className={`progress-bar-area progressbar_${text}`}
    >
      <Grid container>
        <Grid item xs={4}>
          <div className="progress-bar-label">
            <span>{text}</span>
          </div>
        </Grid>
        <Grid item xs={8}>
          <ProgressBar
            completed={inValue}
            bgColor={color}
            height="2vh"
            labelSize="0.8em"
            padding="0.3vmax"
          />
        </Grid>
      </Grid>
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
