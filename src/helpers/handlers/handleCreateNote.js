import { noteServices } from "../../services";
import { handleValidateNote } from "./handleValidateNote.js";

export const handleCreateNote = (newNote, notes, handleSetNotes) => {
  console.log("New note for validation:", newNote); 
  const validationStatus = handleValidateNote(newNote);

  if (validationStatus) {
    noteServices
      .createNote(newNote)
      .then((createdNote) => {
        console.log("New note created:", createdNote);
        handleSetNotes([...notes, createdNote]);
      })
      .catch((error) => {
        console.error("Error creating note:", error);
      });
  } else {
    console.log("Validation unsuccessful");
  }
};
