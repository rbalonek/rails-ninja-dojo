import React from "react";

export default function Home(props) {
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
                <>{student.sensei_id === sensei.id && <p>{student.name}</p>}</>
              ))}
              <button>JOIN</button>
              <hr />
            </>
          ))}
        </>
      ))}
    </div>
  );
}
