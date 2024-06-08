import PropTypes from 'prop-types';
import { STATUS } from "../../data";
import { handleCreateNote } from "../../helpers/handlers/handleCreateNote";
import { Button, DropdownList } from "../shared";

export const CreateNoteForm = ({ notes, handleSetNotes }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements;

    const newNote = {
      name: formElements.name?.value,
      description: formElements.description?.value,
      important: formElements.important?.checked,
      status: formElements.status?.value,
      dueDate: formElements.dueDate?.value,
    };

    handleCreateNote(newNote, notes, handleSetNotes);

    event.target.reset();
  };

  const selectedStatusValue = "SomeStatus";

  return (
    <form className="create-note__form" onSubmit={handleSubmit}>
      <label className="input-label" htmlFor="name">
        Name
      </label>
      <input className="form-input" id="name" type="text" name="name" required />
      <label className="input-label" htmlFor="description">
        Description
      </label>
      <textarea
        rows="3"
        className="form-input"
        id="description"
        type="text"
        name="description"
        required
      />
      <label className="input-label" htmlFor="dueDate">
        Due date
      </label>
      <input className="form-input" id="dueDate" type="date" name="dueDate" required />
      <fieldset className="form-fieldset">
        <input
          className="checkbox-input"
          id="important"
          type="checkbox"
          name="important"
        />
        <label className="input-label" htmlFor="important">
          Important
        </label>
        <DropdownList selectedStatus={selectedStatusValue} OPTIONS={STATUS} />
      </fieldset>
      <Button className="submit-button" type="submit" label="Create Note" />
    </form>
  );
};

CreateNoteForm.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
};
