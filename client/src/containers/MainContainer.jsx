import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "../screens/Home";
import AddStudent from "../screens/AddStudent";

import { getAllDojos } from "../services/dojos";

import {
  getAllStudentsWithSensei,
  postStudent,
  deleteStudent,
} from "../services/students";
import Landing from "../screens/Landing/Landing";

export default function MainContainer() {
  const [dojos, setDojos] = useState([]);
  const [students, setStudents] = useState([]);

  let history = useHistory();

  useEffect(() => {
    const fetchDojos = async () => {
      const dojoArray = await getAllDojos();
      setDojos(dojoArray);
    };
    const fetchStudentsDojoOneSenseiOne = async (dojo_id, sensei_id) => {
      const studentArray = await getAllStudentsWithSensei(dojo_id, sensei_id);

      setStudents((prevState) => [...prevState, studentArray]);
    };
    const fetchStudentsDojoOneSenseiTwo = async (dojo_id, sensei_id) => {
      const studentArray = await getAllStudentsWithSensei(dojo_id, sensei_id);

      setStudents((prevState) => [...prevState, studentArray]);
    };
    const fetchStudentsDojoOneSenseiThree = async (dojo_id, sensei_id) => {
      const studentArray = await getAllStudentsWithSensei(dojo_id, sensei_id);

      setStudents((prevState) => [...prevState, studentArray]);
    };
    const fetchStudentsDojoOneSenseiFour = async (dojo_id, sensei_id) => {
      const studentArray = await getAllStudentsWithSensei(dojo_id, sensei_id);

      setStudents((prevState) => [...prevState, studentArray]);
    };

    fetchDojos();
    fetchStudentsDojoOneSenseiOne(1, 1);
    fetchStudentsDojoOneSenseiTwo(1, 2);
    fetchStudentsDojoOneSenseiThree(2, 3);
    fetchStudentsDojoOneSenseiFour(2, 4);
  }, []);

  const createSubmit = async (formData) => {
    const newStudent = await postStudent(formData);
    setStudents((prevState) => [...prevState, newStudent]);
    alert("Thanks, you've been added!");
    // history.push("/");
    // window.location.reload();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    setStudents((prevState) =>
      prevState.filter((student) => student.id !== id)
    );
    window.location.reload();
  };

  // console.log(students);

  return (
    <Switch>
      <Route path="/join">
        <AddStudent dojos={dojos} createSubmit={createSubmit} />
      </Route>

      <Route path="/landing">
        <Landing
          dojos={dojos}
          createSubmit={createSubmit}
          handleDelete={handleDelete}
          studentArray={students.flat()}
        />
      </Route>

      <Route path="/">
        <Home
          handleDelete={handleDelete}
          studentArray={students.flat()}
          dojos={dojos}
        />
      </Route>
    </Switch>
  );
}
