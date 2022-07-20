import gsap from "gsap";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./scss/mainNavbar.scss";

function MainNavbar(props) {
  const { sectionList } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    gsap.fromTo(
      ".nav-bar",
      { y: 0, duration: 0.2 },
      { y: "8vh", duration: 1.0, ease: "elastic.out(0.8, 0.5)" }
    );
    setIsOpen(true);
  };

  const handleClose = () => {
    gsap.fromTo(
      ".nav-bar",
      { y: "8vh", duration: 0.2 },
      { y: 0, duration: 0.6 }
    );
    setIsOpen(false);
  };
  return (
    <div
      className="nav-bar"
      onMouseEnter={() => {
        if (!isOpen) {
          handleOpen();
        }
      }}
      onMouseLeave={() => {
        if (isOpen) {
          handleClose();
        }
      }}
    >
      <div className="nav-bar-area">
        <div className="nav-bar-menu">
          {sectionList.map((obj) => (
            <div
              key={obj.title}
              className="nav-bar-menu-item"
              onClick={() => {
                const panel = document.querySelectorAll(`#panel-${obj.id}`);
                gsap.to(window, {
                  scrollTo: { y: panel },
                  duration: 1,
                  ease: "power4.out",
                });
              }}
            >
              <span className="nav-bar-item-text">{obj.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="nav-bar-open-button"
        onClick={() => {
          if (isOpen) {
            handleOpen();
          } else {
            handleClose();
          }
        }}
      >
        open
      </div>
    </div>
  );
}

MainNavbar.propTypes = {
  sectionList: PropTypes.arrayOf(PropTypes.object),
};

MainNavbar.defaultProps = {
  sectionList: [],
};

export default MainNavbar;
