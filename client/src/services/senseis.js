import api from "./api-config";

export const getAllSenseisInDojo = async (id) => {
  const resp = await api.get(`/dojos/${id}/senseis/${id}`);
  return resp.data;
};

export const getAllSenseis = async (id) => {
  const resp = await api.get(`/senseis/`);
  return resp.data;
};

export const getOneSensei = async (id) => {
  const resp = await api.get(`/senseis/${id}`);
  return resp.data;
};
