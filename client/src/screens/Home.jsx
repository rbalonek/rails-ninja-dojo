import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

export default function Home(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  const goToJoin = () => {
    history.push("/join");
  };

  const goTOLanding = () => {
    history.push("/landing");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button className="btn primary" onClick={goTOLanding}>
        BACK
      </button>
      <button className="btn secondary" onClick={logIn}>
        Edit
      </button>
      {isLoggedIn === true && (
        <button className="btn secondary" onClick={logOut}>
          End Edits
        </button>
      )}

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
                      {isLoggedIn === true && (
                        <>
                          <button
                            className="btn warning"
                            onClick={() => props.handleDelete(student.id)}
                          >
                            Delete
                          </button>
                          <Link to={`/update/${student.id}`}>
                            <button
                              style={{ marginLeft: "20px" }}
                              className="btn secondary"
                            >
                              Edit
                            </button>
                          </Link>
                        </>
                      )}
                    </>
                  )}
                </>
              ))}

              <hr />
            </>
          ))}
        </>
      ))}
    </div>
  );
}
