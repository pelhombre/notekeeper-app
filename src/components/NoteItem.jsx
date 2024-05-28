import { useUpdate } from "../hooks";
import { Note } from "./Note";
import { UpdateNoteForm } from "./UpdateNoteForm";

export const NoteItem = ({ note, notes, handleSetNotes }) => {
  const { update, handleSetUpdate } = useUpdate();

  return (
    <>
      {update ? (
        <>
          <UpdateNoteForm
            updatingNote={note}
            notes={notes}
            handleSetNotes={handleSetNotes}
            handleSetUpdate={handleSetUpdate}
          />
        </>
      ) : (
        <Note
          note={note}
          handleSetNotes={handleSetNotes}
          handleSetUpdate={handleSetUpdate}
        />
      )}
    </>
  );
};