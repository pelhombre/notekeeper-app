import PropTypes from 'prop-types';
import { STATUS } from "../../data";
import { handleCreateNote } from "../../helpers/handlers/handleCreateNote";
import { Button, DropdownList } from "../shared";

export const CreateNoteForm = ({ notes, handleSetNotes }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      name: event.target.elements.name.value,
      description: event.target.elements.description.value,
      important: event.target.elements.important.checked,
      status: event.target.elements.status.value,
      dueDate: event.target.elements.dueDate.value,
    };

    handleCreateNote(newNote, notes, handleSetNotes);

    event.target.reset();
  };

  return (
    <form className="create-note__form" onSubmit={handleSubmit}>
      <label className="input-label" htmlFor="name">
        Name
      </label>
      <input className="form-input" id="name" type="text" name="name" />
      <label className="input-label" htmlFor="description">
        Description
      </label>
      <textarea
        rows="3"
        className="form-input"
        id="description"
        type="text"
        name="description"
      />
      <label className="input-label" htmlFor="dueDate">
        Due date
      </label>
      <input className="form-input" id="dueDate" type="date" name="dueDate" />
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
        <DropdownList OPTIONS={STATUS} />
      </fieldset>
      <Button className="submit-button" type="submit" action={handleSubmit} label="Create Note" />
    </form>
  );
};

CreateNoteForm.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
};
