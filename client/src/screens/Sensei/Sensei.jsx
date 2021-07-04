import React from "react";
import "./Sensei.css";
import { useParams, useHistory } from "react-router-dom";

export default function Sensei(props) {
  let history = useHistory();
  const { id } = useParams();
  const TheIDToUse = id - 1 + 1;

  return (
    <div>
      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
        <button className="btn primary" onClick={() => history.goBack()}>
          BACK
        </button>
      </div>
      <div className="sensei__text-holder">
        {props.senseis.map((sensei) => (
          <>
            {sensei.id === TheIDToUse && (
              <>
                <h1>{sensei.name}</h1>
                <hr />
                <img
                  className="sensei__img"
                  alt={sensei.name}
                  src={sensei.image_url}
                />
                <p>{sensei.wise_quote}</p>
              </>
            )}
          </>
        ))}
        <h1>Students</h1>
        {props.studentArray.map((student) => (
          <>
            {student.sensei_id === TheIDToUse && (
              <>
                <div className="sensei__student-info">
                  <h4>
                    <span style={{ fontStyle: "italic", fontSize: "smaller" }}>
                      NAME:
                    </span>{" "}
                    {student.name}
                  </h4>
                  <h3>||||</h3>
                  <p>Special Attack: {student.special_attack}</p>
                </div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
