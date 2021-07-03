import React from "react";
import { useHistory } from "react-router-dom";
export default function Home(props) {
  let history = useHistory();

  const goToJoin = () => {
    history.push("/join");
  };

  return (
    <div style={{ textAlign: "center" }}>
      {props.dojos.map((dojo) => (
        <>
          <h1 style={{ color: "red" }}>{dojo.name}</h1>
          {dojo.senseis.map((sensei) => (
            <>
              <h3 style={{ color: "blue" }}>{sensei.name}</h3>

              <img
                style={{ height: "100px" }}
                alt="sensei"
                src={sensei.image_url}
              />
              <h2>STUDENTS</h2>
              {props.studentArray.map((student) => (
                <>
                  {student.sensei_id === sensei.id && (
                    <>
                      <h4>NAME: {student.name}</h4>
                      <p>Special Attack: {student.special_attack}</p>
                    </>
                  )}
                </>
              ))}
              <button onClick={goToJoin}>JOIN</button>
              <hr />
            </>
          ))}
        </>
      ))}
    </div>
  );
}
