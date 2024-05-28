import { Note } from "./Note";
import PropTypes from 'prop-types';

export const NotesList = ({ notes, handleSetNotes }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <Note key={index} note={note} handleSetNotes={handleSetNotes} />
      ))}
    </ul>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      important: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
};
