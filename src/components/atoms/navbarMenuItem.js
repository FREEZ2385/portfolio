import React from "react";
import "./scss/navbarMenuItem.scss";
import PropTypes from "prop-types";

function NavbarMenuItem(props) {
  const { title, icon, link } = props;
  return (
    <div className="nav-bar-menu-item">
      <div className="content">{icon + link}</div>
      <div className="title">{title}</div>
    </div>
  );
}

NavbarMenuItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
};

NavbarMenuItem.defaultProps = {
  title: "test",
  icon: "test",
  link: "test",
};

export default NavbarMenuItem;
