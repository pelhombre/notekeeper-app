import PropTypes from 'prop-types';
import { handleDeleteNote } from "../../helpers/handlers/handleDeleteNote.js";
import { Button } from "../shared";

export const NoteItem = ({ note, handleSetNotes }) => {
  const handleDelete = () => {
    if (!isNaN(Number(note.id))) {
      handleDeleteNote(note.id, handleSetNotes); 
    } else {
      console.error("Invalid note ID:", note.id);
    }
  };

  return (
    <li className="note-item">
      <header className="note-heading">
        {note.important && "⭐"} {note.name}
        <Button
          className="delete-button"
          type="button"
          action={handleDelete}
          label="❌"
        />
      </header>
    </li>
  );
};

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    important: PropTypes.bool,
    status: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
};
