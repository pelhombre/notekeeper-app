import { noteServices } from "../../services/noteServices.js";

export const handleDeleteNote = (noteID, handleSetNotes) => {
  console.log("handleDeleteNote called with noteID:", noteID);
  if (!isNaN(Number(noteID))) {
    noteServices
      .deleteNote(noteID)
      .then(() => {
        console.log("Note deleted successfully.");
        return noteServices.getNotes();
      })
      .then((data) => {
        if (data && Array.isArray(data.notes)) {
          const notesWithNumberIds = data.notes.map(note => ({
            ...note,
            id: Number(note.id)
          }));
          handleSetNotes(notesWithNumberIds);
        }
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  } else {
    console.error("Invalid note ID:", noteID);
  }
};
