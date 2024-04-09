import React from "react";
import "./Heder.css";

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_title">{title}</div>
      <div className="header_rigth">{rightChild}</div>
    </div>
  );
};

export default Header;
