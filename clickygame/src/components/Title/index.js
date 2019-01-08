import React from "react";
import "./style.css";

function Title(props) {
  return <div className="titleContainer"><h1 className="title">{props.children}</h1>
  <h2 className="title2"> Click on an image to earn points! </h2>
  </div>;
}

export default Title;
