import React from "react";
import "./TeacherCard.css";
import { useHistory } from "react-router-dom";

export default function TeacherCard(props) {
  let history = useHistory();

  const goToJoin = () => {
    history.push("/join");
  };

  return (
    <div className="teacher-card__container">
      <h1>{props.sensei.name}</h1>
      <img
        style={{ height: "150px", maxWidth: "300px", alignSelf: "center" }}
        alt={props.sensei.name}
        src={props.sensei.image_url}
      />
      <p>{props.sensei.wise_quote}</p>
      <div className="teacher-card__button-container">
        <button className="btn secondary" onClick={goToJoin}>
          Join
        </button>
        <button
          className="btn primary"
          onClick={() =>
            // console.log(props.sensei)
            history.push(
              `/dojos/${props.sensei.dojo_id}/senseis/${props.sensei.id}/students`
            )
          }
        >
          See Students
        </button>
      </div>
    </div>
  );
}
