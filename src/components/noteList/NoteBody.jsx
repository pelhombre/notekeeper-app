import PropTypes from 'prop-types';
import { Button } from "../shared";

export const NoteBody = ({ note, handleSetUpdate }) => {
  return (
    <article className="note-body">
      <section className="note-details">
        <p className="note-status">{note.status.toUpperCase()}</p>
        <p className="note-due_date">{note.dueDate}</p>
      </section>
      <p className="note-description">{note.description}</p>
      <div className="button-container">
        <Button className="edit-button" action={handleSetUpdate} label="✏️" />
      </div>
    </article>
  );
};

NoteBody.propTypes = {
  note: PropTypes.shape({
    status: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleSetUpdate: PropTypes.func.isRequired,
};
