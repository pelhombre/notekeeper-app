import PropTypes from 'prop-types';
import { useUpdate } from "../../hooks";
import { NoteBody } from "./NoteBody";
import { UpdateNoteForm } from "./UpdateNoteForm";
import { handleDeleteNote } from "../../helpers/handlers/handleDeleteNote.js";
import { Button } from "../shared";

export const NoteItem = ({ note, notes, handleSetNotes }) => {
  const { update, handleSetUpdate } = useUpdate();

  return (
    <li className="note-item">
      <header className="note-heading">
        {note.important && "⭐"} {note.name}
        <Button
          className="delete-button"
          type="button" // Asegúrate de agregar la propiedad type
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

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    important: PropTypes.bool,
    status: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
};
