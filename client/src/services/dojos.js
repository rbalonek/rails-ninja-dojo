import api from "./api-config";

export const getAllDojos = async () => {
  const resp = await api.get(`/dojos`);
  return resp.data;
};

export const getOneDojo = async (id) => {
  const resp = await api.get(`/dojos/${id}`);
  return resp.data;
};
