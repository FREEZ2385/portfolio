// import gsap from "gsap";
import { Grid } from "@mui/material";
import React from "react";
import "./scss/introduce.scss";
import { useMediaQuery } from "react-responsive";

function Introduce() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 761px)",
  });
  return (
    <section className="introduce">
      <div className="introduce-contents">
        <div className="introduce-title">Freez`s Laziness</div>
        <div className="introduce-subtitle">
          <Grid container>
            <Grid item xs={isDesktop ? 8 : 12} align="right">
              <div className="introduce-subtitle-category-area">
                <span
                  id="introduce-category"
                  className="introduce-subtitle-category"
                ></span>
              </div>
            </Grid>
            <Grid item xs={isDesktop ? 4 : 12} align="right">
              <span className="introduce-subtitle-developer">Developer</span>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default Introduce;
