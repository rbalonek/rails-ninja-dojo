import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "../screens/Home";
import AddStudent from "../screens/AddStudent";
import Dojo from "../screens/Dojo/Dojo";
import Sensei from "../screens/Sensei/Sensei";

import { getAllDojos } from "../services/dojos";

import {
  getAllStudents,
  getAllStudentsWithSensei,
  postStudent,
  deleteStudent,
} from "../services/students";

import { getAllSenseis } from "../services/senseis";

import Landing from "../screens/Landing/Landing";

export default function MainContainer() {
  const [dojos, setDojos] = useState([]);
  const [students, setStudents] = useState([]);
  const [senseis, setSenseis] = useState([]);

  // let history = useHistory();

  useEffect(() => {
    const fetchDojos = async () => {
      const dojoArray = await getAllDojos();
      setDojos(dojoArray);
    };
    const fetchSenseis = async () => {
      const Array = await getAllSenseis();
      setSenseis(Array);
    };

    const fetchAllStudents = async () => {
      const studentArr = await getAllStudents();
      setStudents(studentArr);
    };

    fetchDojos();
    fetchAllStudents();
    fetchSenseis();
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

  console.log("students", students);
  console.log("senseis", senseis);

  return (
    <Switch>
      '
      <Route path="/join">
        <AddStudent dojos={dojos} createSubmit={createSubmit} />
      </Route>
      <Route path="/landing">
        <Landing
          dojos={dojos}
          createSubmit={createSubmit}
          handleDelete={handleDelete}
          studentArray={students}
        />
      </Route>
      <Route path="/dojos/:id/senseis/:id/students">
        <Sensei
          dojos={dojos}
          createSubmit={createSubmit}
          handleDelete={handleDelete}
          studentArray={students}
          senseis={senseis}
        />
      </Route>
      <Route path="/dojos/:id">
        <Dojo
          dojos={dojos}
          createSubmit={createSubmit}
          handleDelete={handleDelete}
          studentArray={students}
        />
      </Route>
      <Route path="/">
        <Home
          handleDelete={handleDelete}
          studentArray={students}
          dojos={dojos}
        />
      </Route>
    </Switch>
  );
}
