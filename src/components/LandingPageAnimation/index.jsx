import React from "react";
import "./styles.scss";

// credit to this codepen https://codepen.io/alexandremasse/pen/dvPrbZ
export default function LandingPageAnimation() {
  const stars = Array.from({ length: 500 }, () => (
    <div className="star" key={Math.random()}></div>
  ));
  return <div className="stars">{stars}</div>;
}
