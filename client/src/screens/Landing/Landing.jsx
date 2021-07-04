import React, { useState } from "react";
import "./Landing.css";
import { useHistory } from "react-router-dom";

import DojoCard from "../../components/DojoCard/DojoCard";

export default function Landing(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let history = useHistory();

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  const goToLanding = () => {
    history.push("/backend");
  };

  return (
    <div className="landing__container">
      <button className="btn primary" onClick={logIn}>
        Fake Login
      </button>
      {isLoggedIn === true && (
        <>
          <button className="btn warning" onClick={logOut}>
            Log Out
          </button>
          <button className="btn secondary" onClick={goToLanding}>
            Backend
          </button>
        </>
      )}

      <h1 className="landing__title">The Dojos</h1>

      <div className="landing__dojo-card-holder">
        {props.dojos.map((dojo) => (
          <DojoCard dojo={dojo} />
        ))}
      </div>
    </div>
  );
}
