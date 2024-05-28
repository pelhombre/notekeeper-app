import { Note } from "./Note";
import PropTypes from 'prop-types';

export const NotesList = ({ notes, handleSetNotes }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <Note key={index} note={note} handleSetNotes={handleSetNotes} handleSetUpdate={() => {}} />
      ))}
    </ul>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      important: PropTypes.bool,
      status: PropTypes.string,
      dueDate: PropTypes.string,
    })
  ).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
};
