import { noteServices } from "../../services";
import { handleValidateNote } from "./handleValidateNote";

export const handleCreateNote = (newNote, notes, handleSetNotes) => {
  console.log("New note for validation:", newNote); 
  const validationStatus = handleValidateNote(newNote);
  if (validationStatus) {
    noteServices
      .createNote(newNote)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
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
