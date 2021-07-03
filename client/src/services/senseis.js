import api from "./api-config";

export const getAllSenseisInDojo = async (dojo_id) => {
  const resp = await api.get(`/dojos/${dojo_id}/senseis`);
  return resp.data;
};
