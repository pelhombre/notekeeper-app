const BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log(`BASE_URL: ${BASE_URL}`);

const getData = async ({ resourcePath }) => {
  const URL_TO_FETCH = `${BASE_URL}/${resourcePath}`;
  console.log(`Fetching data from: ${URL_TO_FETCH}`);
  try {
    const response = await fetch(URL_TO_FETCH);
    if (!response.ok) {
      throw new Error(`Server Error: ${response.statusText}`);
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const body = await response.text(); 
      console.log(`Response body: ${body}`);
      throw new Error("Response is not JSON");
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};


const deleteData = async ({ resourcePath }) => {
  const URL_TO_FETCH = `${BASE_URL}/${resourcePath}`;
  console.log(`Deleting data from: ${URL_TO_FETCH}`);
  try {
    const response = await fetch(URL_TO_FETCH, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Server Error: ${response.statusText}`);
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON");
    }
    return await response.json();
  } catch (error) {
    console.error('Delete error:', error);
    throw error;
  }
};

const createData = async ({ resourcePath, config }) => {
  const URL_TO_FETCH = `${BASE_URL}/${resourcePath}`;
  console.log(`Creating data at: ${URL_TO_FETCH}`);
  try {
    const response = await fetch(URL_TO_FETCH, config);
    if (!response.ok) {
      throw new Error(`Server Error: ${response.statusText}`);
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON");
    }
    return await response.json();
  } catch (error) {
    console.error('Create error:', error);
    throw error;
  }
};

const updateData = async ({ resourcePath, config }) => {
  const URL_TO_FETCH = `${BASE_URL}/${resourcePath}`;
  console.log(`Updating data at: ${URL_TO_FETCH}`);
  try {
    const response = await fetch(URL_TO_FETCH, config);
    if (!response.ok) {
      throw new Error(`Server Error: ${response.statusText}`);
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON");
    }
    return await response.json();
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
};

export const http = {
  get: getData,
  delete: deleteData,
  create: createData,
  update: updateData,
};
