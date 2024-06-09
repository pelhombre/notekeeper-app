import { useUpdate } from "../../hooks";
import { NoteBody } from "./NoteBody";
import { UpdateNoteForm } from "./UpdateNoteForm";
import { handleDeleteNote } from "../../helpers";
import { Button } from "../shared";

import "./NoteItem.css";

export const NoteItem = ({ note, notes, handleSetNotes }) => {
  const { update, handleSetUpdate } = useUpdate();

  return (
    <li className="note-item">
      <header className="note-heading">
        {note.important && "⭐"} {note.name}
        <Button
          className="delete-button"
          action={() => handleDeleteNote(note.id, handleSetNotes)}
          label="❌"
        />
      </header>
      {update ? (
        <UpdateNoteForm
          updatingNote={note}
          notes={notes}
          handleSetNotes={handleSetNotes}
          handleSetUpdate={handleSetUpdate}
        />
      ) : (
        <NoteBody note={note} handleSetUpdate={handleSetUpdate} />
      )}
    </li>
  );
};
