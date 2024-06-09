import { noteServices } from "../../services";

export const handleDeleteNote = (noteID, handleSetNotes) => {
  noteServices
    .deleteNote(noteID)
    .then(() => noteServices.getNotes())
    .then(({ notes }) => handleSetNotes([...notes]));
};
