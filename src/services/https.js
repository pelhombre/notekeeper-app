const getData = ({ url, resourcePath }) => {
  const URL_TO_FETCH = `${url}/${resourcePath}`;
  console.log('Fetching data from URL:', URL_TO_FETCH);

  return globalThis.fetch(URL_TO_FETCH).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};

const deleteData = ({ url, resourcePath }) => {
  const URL_TO_FETCH = `${url}/${resourcePath}`;
  console.log('Deleting data from URL:', URL_TO_FETCH);

  return globalThis.fetch(URL_TO_FETCH, { method: "DELETE" }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};

const createData = ({ url, resourcePath, config }) => {
  const URL_TO_FETCH = `${url}/${resourcePath}`;
  console.log('Creating data at URL:', URL_TO_FETCH);

  return globalThis.fetch(URL_TO_FETCH, config)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(`Error creating data: ${error.message}`);
    });
};


const updateData = ({ url, resourcePath, config }) => {
  const URL_TO_FETCH = `${url}/${resourcePath}`;
  console.log('Updating data at URL:', URL_TO_FETCH);

  return globalThis.fetch(URL_TO_FETCH, config).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};

export const http = {
  get: getData,
  delete: deleteData,
  create: createData,
  update: updateData,
};
