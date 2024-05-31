import { http } from "./https";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const URL_PATH = "notes";

const getNotes = () => {
  return http.get({
    url: BASE_URL,
    resourcePath: URL_PATH,
  });
};

const deleteNote = (noteID) => {
  return http.delete({
    url: BASE_URL,
    resourcePath: `${URL_PATH}/${noteID}`,
  });
};

const createNote = (newNote) => {
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