import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "../screens/Home";
import AddStudent from "../screens/AddStudent";
import Dojo from "../screens/Dojo/Dojo";
import Sensei from "../screens/Sensei/Sensei";
import UpdateStudent from "../screens/UpdateStudent/UpdateStudent";

import { getAllDojos } from "../services/dojos";

import {
  getAllStudents,
  putStudent,
  postStudent,
  deleteStudent,
} from "../services/students";

import { getAllSenseis } from "../services/senseis";

import Landing from "../screens/Landing/Landing";

export default function MainContainer() {
  const [dojos, setDojos] = useState([]);
  const [students, setStudents] = useState([]);
  const [senseis, setSenseis] = useState([]);

  let history = useHistory();

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

  const updateSubmit = async (id, formData) => {
    const updatedStudent = await putStudent(id, formData);
    setStudents((prevState) =>
      prevState.map((student) =>
        student.id === Number(id) ? updatedStudent : student
      )
    );
    history.push("/");
  };

  // console.log("students", students);
  // console.log("senseis", senseis);

  return (
    <Switch>
      '
      <Route path="/join">
        <AddStudent dojos={dojos} createSubmit={createSubmit} />
      </Route>
      <Route path="/update/:id">
        <UpdateStudent
          students={students}
          updateSubmit={updateSubmit}
          dojos={dojos}
          createSubmit={createSubmit}
        />
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
          updateSubmit={updateSubmit}
          handleDelete={handleDelete}
          studentArray={students}
          dojos={dojos}
        />
      </Route>
    </Switch>
  );
}
