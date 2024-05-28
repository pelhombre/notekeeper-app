import { noteServices } from "../../services";
import { handleValidateNote } from "./handleValidateNote";

export const handleCreateNote = (newNote, notes, handleSetNotes) => {
  const validationStatus = handleValidateNote(newNote);
  if (validationStatus) {
    noteServices
      .createNote(newNote)
      .then((response) => response.json())
      .then((newNote) => {
        console.log(newNote);
        handleSetNotes([...notes, newNote]);
      });
  } else {
    console.log("Validation unsuccessful");
  }
};