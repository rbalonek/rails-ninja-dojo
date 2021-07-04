import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getAllSenseisInDojo } from "../../services/senseis";

export default function Sensei(props) {
  const [sensei, setSensei] = useState([]);

  let history = useHistory();
  const { id } = useParams();
  const TheIDToUse = id - 1 + 1;
  const minusOne = id - 1;

  console.log("ID", props.senseis[minusOne].id);
  console.log("NAME", props.senseis[minusOne].name);
  // console.log(props.dojos);

  useEffect(() => {
    const fetchSensei = async (TheIDToUse) => {
      const senseiArr = await getAllSenseisInDojo(TheIDToUse);
      setSensei(senseiArr);
    };
    fetchSensei();
  }, []);

  console.log("sesei", sensei);

  return (
    <div>
      <button onClick={() => history.goBack()}>BACK</button>
      <p>{id}</p>

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
