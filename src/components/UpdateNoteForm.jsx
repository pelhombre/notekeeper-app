import PropTypes from 'prop-types';
import { handleUpdateNote } from '../helpers/handlers/handleUpdateNote';
import { STATUS } from '../data'; // Importa STATUS desde el archivo data.js

export const UpdateNoteForm = ({
  updatingNote,
  notes,
  handleSetNotes,
  handleSetUpdate,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const modifiedNote = {
      ...updatingNote,
      name: event.target.elements.name.value,
      description: event.target.elements.description.value,
      important: event.target.elements.important.checked,
      status: event.target.elements.status.value,
      dueDate: event.target.elements.dueDate.value,
    };

    handleUpdateNote(modifiedNote, notes, handleSetNotes);
    handleSetUpdate(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" defaultValue={updatingNote.name} required />
      <label htmlFor="description">Description</label>
      <input id="description" type="text" name="description" defaultValue={updatingNote.description} required />
      <label htmlFor="important">Important</label>
      <input id="important" type="checkbox" name="important" defaultChecked={updatingNote.important} />
      <label htmlFor="status">Status</label>
      <select name="status" id="status" defaultValue={updatingNote.status} required>
        {Object.values(STATUS).map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="dueDate">Due date</label>
      <input id="dueDate" type="date" name="dueDate" defaultValue={updatingNote.dueDate} required />
      <button type="submit">Update</button>
    </form>
  );
};

UpdateNoteForm.propTypes = {
  updatingNote: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
  }).isRequired,
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
  handleSetUpdate: PropTypes.func.isRequired,
};

export default UpdateNoteForm;
