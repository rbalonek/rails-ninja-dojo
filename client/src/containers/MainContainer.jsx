import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "../screens/Home";

import { getAllDojos } from "../services/dojos";

import { getAllStudentsWithSensei } from "../services/students";

export default function MainContainer() {
  const [dojos, setDojos] = useState([]);
  const [studentsSenseiOne, setStudentsSenseiOne] = useState([]);
  const [studentsSenseiTwo, setStudentsSenseiTwo] = useState([]);
  const [studentsSenseiThree, setStudentsSenseiThree] = useState([]);
  const [studentsSenseiFour, setStudentsSenseiFour] = useState([]);

  let studentArray = [];

  useEffect(() => {
    const fetchDojos = async () => {
      const dojoArray = await getAllDojos();
      setDojos(dojoArray);
    };
    const fetchStudentsDojoOneSenseiOne = async (dojo_id, sensei_id) => {
      const studentArray = await getAllStudentsWithSensei(dojo_id, sensei_id);
      setStudentsSenseiOne(studentArray);
    };
    const fetchStudentsDojoOneSenseiTwo = async (dojo_id, sensei_id) => {
      const studentArray = await getAllStudentsWithSensei(dojo_id, sensei_id);
      setStudentsSenseiTwo(studentArray);
    };
    const fetchStudentsDojoOneSenseiThree = async (dojo_id, sensei_id) => {
      const studentArray = await getAllStudentsWithSensei(dojo_id, sensei_id);
      setStudentsSenseiThree(studentArray);
    };
    const fetchStudentsDojoOneSenseiFour = async (dojo_id, sensei_id) => {
      const studentArray = await getAllStudentsWithSensei(dojo_id, sensei_id);
      setStudentsSenseiFour(studentArray);
    };

    fetchDojos();
    fetchStudentsDojoOneSenseiOne(1, 1);
    fetchStudentsDojoOneSenseiTwo(1, 2);
    fetchStudentsDojoOneSenseiThree(2, 3);
    fetchStudentsDojoOneSenseiFour(2, 4);
  }, []);

  // console.log("dojos", dojos);

  studentArray.push(studentsSenseiOne);
  studentArray.push(studentsSenseiTwo);
  studentArray.push(studentsSenseiThree);
  studentArray.push(studentsSenseiFour);

  return (
    <Switch>
      <Route path="/">
        <Home
          studentArray={studentArray.flat()}
          dojos={dojos}
          studentsSenseiOne={studentsSenseiOne}
          studentsSenseiTwo={studentsSenseiTwo}
          studentsSenseiThree={studentsSenseiThree}
          studentsSenseiFour={studentsSenseiFour}
        />
      </Route>
    </Switch>
  );
}
