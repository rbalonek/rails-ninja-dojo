import api from "./api-config";

export const getAllDojos = async () => {
  const resp = await api.get(`/dojos`);
  return resp.data;
};
