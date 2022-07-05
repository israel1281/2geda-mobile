import axios from "axios";

export const postAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.post(`https://api.2geda.net/api/${url}`, post, {
    headers: { Authorization: "Bearer " + token }
  });

  return res;
};

export const getAPI = async (url: string, token?: string) => {
  const res = await axios.get(`https://api.2geda.net/api/${url}`, {
    headers: { Authorization: "Bearer " + token }
  });

  return res;
};

export const patchAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.patch(`https://api.2geda.net/api/${url}`, post, {
    headers: { Authorization: "Bearer " + token }
  });

  return res;
};

export const putAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.put(`https://api.2geda.net/api/${url}`, post, {
    headers: { Authorization: "Bearer " + token }
  });

  return res;
};

export const deleteAPI = async (url: string, token?: string) => {
  const res = await axios.delete(`https://api.2geda.net/api/${url}`, {
    headers: { Authorization: "Bearer " + token }
  });

  return res;
};
