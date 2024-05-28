const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const URL_PATH = "notes";

const URL_TO_FETCH = `${BASE_URL}/${URL_PATH}`;

const getNotes = () => {
  return fetch(URL_TO_FETCH)
    .then((response) => response.json())
    .then((data) => data.notes);
};

const deleteNote = (noteID) => {
  return fetch(`${URL_TO_FETCH}/${noteID}`, { method: "DELETE" });
};

const updateNote = (updatingNote) => {
  return fetch(URL_TO_FETCH, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatingNote),
  });
};

const createNote = (newNote) => {
  return fetch(URL_TO_FETCH, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newNote),
  });
};

export const noteServices = {
  getNotes,
  deleteNote,
  updateNote,
  createNote,
};