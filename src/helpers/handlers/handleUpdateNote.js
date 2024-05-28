import { handleValidateNote } from "./handleValidateNote";
import { noteServices } from "../../services";

export const handleUpdateNote = (modifiedNote, notes, handleSetNotes) => {
  const validationSuccess = handleValidateNote(modifiedNote);

  validationSuccess
    ? noteServices.updateNote(modifiedNote).then((updatedNote) => {
        const updatedNotes = notes.map((note) =>
          note.id === updatedNote.id ? updatedNote : note,
        );
        handleSetNotes(updatedNotes);
      })
    : console.log("Validation Unsuccessful");
};