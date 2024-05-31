const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getData = ({ resourcePath }) => {
  const URL_TO_FETCH = `${BASE_URL}/${resourcePath}`;
  return globalThis.fetch(URL_TO_FETCH).then((response) => response.json());
};

const deleteData = ({ resourcePath }) => {
  const URL_TO_FETCH = `${BASE_URL}/${resourcePath}`;
  return globalThis
    .fetch(URL_TO_FETCH, { method: "DELETE" })
    .then((response) => response.json());
};

const createData = ({ resourcePath, config }) => {
  const URL_TO_FETCH = `${BASE_URL}/${resourcePath}`;
  return globalThis
    .fetch(URL_TO_FETCH, config)
    .then((response) => response.json());
};

const updateData = ({ resourcePath, config }) => {
  const URL_TO_FETCH = `${BASE_URL}/${resourcePath}`;
  return globalThis
    .fetch(URL_TO_FETCH, config)
    .then((response) => response.json());
};

export const http = {
  get: getData,
  delete: deleteData,
  create: createData,
  update: updateData,
};
