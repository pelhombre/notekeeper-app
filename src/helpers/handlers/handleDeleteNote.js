import { noteServices } from "../../services/noteServices.js";

export const handleDeleteNote = (noteID, handleSetNotes) => {
  noteServices
    .deleteNote(noteID)
    .then(() => noteServices.getNotes())
    .then(({ notes }) => {
      const notesWithNumberIds = notes.map(note => ({
        ...note,
        id: Number(note.id)
      }));
      handleSetNotes(notesWithNumberIds);
    });
};
