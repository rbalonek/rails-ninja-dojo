import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Dojo.css";

import TeacherCard from "../../components/TeacherCard/TeacherCard";

export default function Dojo(props) {
  let history = useHistory();
  const { id } = useParams();

  const minusOne = id - 1;
  // console.log(props.dojos[minusOne].name);

  const backToLanding = () => {
    // history.push("/landing");
    history.goBack();
  };

  return (
    <div className="dojo__container">
      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
        <button className="btn primary" onClick={backToLanding}>
          BACK
        </button>
      </div>
      <h1 className="dojo__title">{props.dojos[minusOne].name}</h1>
      <hr />
      <div className="dojo__teacher-card-holder">
        {props.dojos[minusOne].senseis.map((sensei) => (
          <TeacherCard sensei={sensei} />
        ))}
      </div>
    </div>
  );
}
