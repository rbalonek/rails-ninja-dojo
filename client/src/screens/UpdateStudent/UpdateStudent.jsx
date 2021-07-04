import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UpdateStudent.css";
import { useHistory } from "react-router-dom";

export default function UpdateStudent(props) {
  let history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    special_attack: "",
    sensei_id: "",
  });

  const { id } = useParams();
  const { students, updateSubmit } = props;

  const { name, age, special_attack, sensei_id } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { [name]: value };
    setFormData((formData) => {
      return { ...formData, ...newData };
    });
  };

  // console.log(Number(id));

  useEffect(() => {
    const prefilForm = () => {
      const singleStudent = students.find(
        (student) => student.id === Number(id)
      );
      setFormData({
        name: singleStudent.name,
        age: singleStudent.age,
        special_attack: singleStudent.special_attack,
        sensei_id: singleStudent.sensei_id,
      });
    };
    if (students.length) {
      prefilForm();
    }
  }, [id, students]);
  const goBack = () => {
    history.goBack();
  };
  return (
    <div>
      <div className="add-student__container">
        <form
          className="add-student__form"
          onSubmit={(e) => {
            e.preventDefault();
            updateSubmit(id, formData);
          }}
        >
          <h1>JOIN</h1>

          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

          <label>
            Age:
            <input type="text" name="age" value={age} onChange={handleChange} />
          </label>

          <label>
            Special Attack:
            <input
              type="text"
              name="special_attack"
              value={special_attack}
              onChange={handleChange}
            />
          </label>

          <label>Sensei:</label>
          <select
            className="add-student__sensei-dropdown"
            name="sensei_id"
            value={sensei_id}
            onChange={handleChange}
          >
            <option>--</option>
            {props.dojos.map((dojo) => (
              <>
                {dojo.senseis.map((sensei) => (
                  <>
                    <option type="number" value={sensei.id}>
                      {sensei.name}
                    </option>
                  </>
                ))}
              </>
            ))}
          </select>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "50px",
            }}
          >
            <button className="btn secondary" onClick={goBack}>
              BACK
            </button>
            <button className="btn primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
