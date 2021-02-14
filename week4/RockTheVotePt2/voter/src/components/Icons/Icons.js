import React from "react";
import "./Icons.css";

const Icons = ({ text, Icon, active }) => {
  return (
    <div className={`Icons ${active && "Icons--active"}`}>
      <Icon />
      <h2 className="hide-non-active">{text}</h2>
    </div>
  );
};

export default Icons;