import { noteServices } from "../../services";
import { handleValidateNote } from "./handleValidateNote";

export const handleCreateNote = (newNote, notes, handleSetNotes) => {
  const validationSuccess = handleValidateNote(newNote);

  validationSuccess
    ? noteServices.createNote(newNote).then((newNote) => {
        handleSetNotes([...notes, newNote]);
      })
    : console.log("Validation Unsuccessful");
};
