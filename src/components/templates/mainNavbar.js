import gsap from "gsap";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./scss/mainNavbar.scss";

function MainNavbar(props) {
  const { sectionList } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [styledSectionList, setStyledSectionList] = useState(sectionList);

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

  const isNearSetting = () => {
    const tempSectionList = sectionList.map((obj) => {
      const sectionPosition = obj.ref.current.getBoundingClientRect();
      const isNear =
        sectionPosition.top < sectionPosition.height / 2 + 3 &&
        -sectionPosition.top < sectionPosition.height / 2 - 3;
      return {
        ...obj,
        isNear: isNear,
      };
    });

    setStyledSectionList(tempSectionList);
  };

  useEffect(() => {
    window.addEventListener("scroll", isNearSetting);
    return () => {
      window.removeEventListener("scroll", isNearSetting);
    };
  }, [sectionList]);

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
          {styledSectionList.map((obj) => (
            <div
              key={obj.title}
              className="nav-bar-menu-item"
              onClick={() => {
                const panel = document.querySelectorAll(`#panel-${obj.id}`);
                console.log(obj.ref.current.getBoundingClientRect());
                gsap.to(window, {
                  scrollTo: { y: panel },
                  duration: 1,
                  ease: "power4.out",
                });
              }}
            >
              <div
                className={obj.isNear ? "selected-text" : "non-selected-text"}
              >
                {obj.title}
              </div>
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
      ></div>
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
