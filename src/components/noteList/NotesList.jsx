import PropTypes from 'prop-types';
import { NoteItem } from "./NoteItem";

export const NotesList = ({ notes, handleSetNotes }) => {
  return (
    <ul className="notes-list">
      {notes.map((note, index) => (
        <NoteItem
          key={index}
          note={note}
          notes={notes}
          handleSetNotes={handleSetNotes}
        />
      ))}
    </ul>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      important: PropTypes.bool,
      status: PropTypes.string,
      dueDate: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
};
