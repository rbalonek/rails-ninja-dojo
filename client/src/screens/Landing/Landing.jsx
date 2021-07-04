import React from "react";
import "./Landing.css";
import { useHistory } from "react-router-dom";

import DojoCard from "../../components/DojoCard/DojoCard";

export default function Landing(props) {
  let history = useHistory();

  const goToLanding = () => {
    history.push("/");
  };

  return (
    <div className="landing__container">
      <button onClick={goToLanding}>Home</button>
      <h1 className="landing__title">The Dojos</h1>

      <div className="landing__dojo-card-holder">
        {props.dojos.map((dojo) => (
          <DojoCard dojo={dojo} />
        ))}
      </div>
    </div>
  );
}
