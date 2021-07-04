import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getAllSenseisInDojo } from "../../services/senseis";

export default function Sensei(props) {
  let history = useHistory();
  const { id } = useParams();
  const TheIDToUse = id - 1 + 1;

  return (
    <div>
      <button onClick={() => history.goBack()}>BACK</button>
      <p>{id}</p>

      {props.senseis.map((sensei) => (
        <>{sensei.id === TheIDToUse && <h1>{sensei.name}</h1>}</>
      ))}

      {props.studentArray.map((student) => (
        <>
          {student.sensei_id === TheIDToUse && (
            <>
              <h4>NAME: {student.name}</h4>
              <p>{student.sensei_id}</p>
              <p>Special Attack: {student.special_attack}</p>
            </>
          )}
        </>
      ))}
    </div>
  );
}
