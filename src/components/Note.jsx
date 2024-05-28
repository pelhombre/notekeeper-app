import { handleDeleteNote } from "../helpers/handlers";
import { Button } from "./shared";
import PropTypes from 'prop-types';

export const Note = ({ note, handleSetNotes }) => {
  return (
    <li>
      {`${note.name} | ${note.description} | IMPORTANT: ${note.important}`}
      <Button
        action={() => handleDeleteNote(note.id, handleSetNotes)}
        label="Delete"
      />
    </li>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  }).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
};
