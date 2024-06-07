import { noteServices } from "../../services/noteServices.js";

export const handleDeleteNote = (noteID, handleSetNotes) => {
  noteServices
    .deleteNote(noteID)
    .then(() => noteServices.getNotes())
    .then((notes) => handleSetNotes([...notes]));
};