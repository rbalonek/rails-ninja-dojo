import api from "./api-config";

export const getAllStudents = async () => {
  const resp = await api.get("/students");
  return resp.data;
};

export const getAllStudentsWithSensei = async (dojo_id, sensei_id) => {
  const resp = await api.get(`dojos/${dojo_id}/senseis/${sensei_id}/students`);
  return resp.data;
};

export const getOneStudent = async (id) => {
  const resp = await api.get(`/students/${id}`);
  return resp.data;
};

export const putStudent = async (id, formData) => {
  const resp = await api.put(`/students/${id}`, { student: formData });
  return resp.data;
};

export const postStudent = async (formData) => {
  const resp = await api.post("/dojos/2/senseis/3/students/", {
    student: formData,
  });
  return resp.data;
};

export const deleteStudent = async (id) => {
  const resp = await api.delete(`/students/${id}`);
  return resp.data;
};
