import { http } from "./https.js";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const URL_PATH = "notes";

console.log(`Note Services BASE_URL: ${BASE_URL}`);

const getNotes = () => {
  console.log(`getNotes URL: ${BASE_URL}/${URL_PATH}`);
  return http.get({ url: BASE_URL, resourcePath: URL_PATH });
};

const deleteNote = (noteID) => {
  console.log(`deleteNote URL: ${BASE_URL}/${URL_PATH}/${noteID}`);
  return http.delete({ url: BASE_URL, resourcePath: `${URL_PATH}/${noteID}` });
};

const createNote = (newNote) => {
  console.log(`createNote URL: ${BASE_URL}/${URL_PATH}`);
  return http.create({
    url: BASE_URL,
    resourcePath: URL_PATH,
    config: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    },
  });
};

const updateNote = (modifiedNote) => {
  console.log(`updateNote URL: ${BASE_URL}/${URL_PATH}/${modifiedNote.id}`);
  return http.update({
    url: BASE_URL,
    resourcePath: `${URL_PATH}/${modifiedNote.id}`,
    config: {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modifiedNote),
    },
  });
};

export const noteServices = {
  getNotes,
  deleteNote,
  updateNote,
  createNote,
};
