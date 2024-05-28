const getData = ({ url, resourcePath }) => {
    const URL_TO_FETCH = `${url}/${resourcePath}`;
  
    return globalThis.fetch(URL_TO_FETCH).then((response) => response.json());
  };
  
  const deleteData = ({ url, resourcePath }) => {
    const URL_TO_FETCH = `${url}/${resourcePath}`;
    return globalThis
      .fetch(URL_TO_FETCH, { method: "DELETE" })
      .then((response) => response.json());
  };
  
  const createData = ({ url, resourcePath, config }) => {
    const URL_TO_FETCH = `${url}/${resourcePath}`;
    return globalThis
      .fetch(URL_TO_FETCH, config)
      .then((response) => response.json());
  };
  
  const updateData = ({ url, resourcePath, config }) => {
    const URL_TO_FETCH = `${url}/${resourcePath}`;
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