import PropTypes from 'prop-types';
import { STATUS } from "../../data";
import { handleUpdateNote } from "../../helpers/handlers/handleUpdateNote.js";
import { Button, DropdownList } from "../shared";
import { useImportance } from "../../hooks/useImportance";

export const UpdateNoteForm = ({
  updatingNote,
  notes,
  handleSetNotes,
  handleSetUpdate,
}) => {
  const { importance, handleSetImportance } = useImportance(
    updatingNote.important,
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements;

    const modifiedNote = {
      ...updatingNote,
      name: formElements.name?.value,
      description: formElements.description?.value,
      important: formElements.important?.checked,
      status: formElements.status?.value,
      dueDate: formElements.dueDate?.value,
    };

    handleUpdateNote(modifiedNote, notes, handleSetNotes);
    handleSetUpdate();
  };

  return (
    <form className="update-note__form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        id="name"
        name="name"
        type="text"
        defaultValue={updatingNote.name}
      />
      <textarea
        rows="3"
        className="form-input"
        id="description"
        name="description"  // Añadir el nombre aquí
        defaultValue={updatingNote.description}
      />
      <input
        className="form-input"
        id="dueDate"
        name="dueDate"  // Añadir el nombre aquí
        type="date"
        defaultValue={updatingNote.dueDate}
      />
      <fieldset className="form-fieldset">
        <input
          className="checkbox-input"
          id="important"
          name="important"  // Añadir el nombre aquí
          type="checkbox"
          checked={importance}
          onChange={handleSetImportance}
        />
        <label className="input-label" htmlFor="important">
          Important
        </label>
        <DropdownList selectedStatus={updatingNote.status} OPTIONS={STATUS} />
      </fieldset>
      <div className="button-group">
        <Button
          className="cancel-button"
          type="button"
          label="Cancel"
          action={handleSetUpdate}
        />
        <Button
          className="save-button"
          type="submit"
          label="Save"
        />
      </div>
    </form>
  );
};

UpdateNoteForm.propTypes = {
  updatingNote: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    dueDate: PropTypes.string,
    important: PropTypes.bool,
    status: PropTypes.string,
  }).isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      dueDate: PropTypes.string,
      important: PropTypes.bool,
      status: PropTypes.string,
    })
  ).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
  handleSetUpdate: PropTypes.func.isRequired,
};
