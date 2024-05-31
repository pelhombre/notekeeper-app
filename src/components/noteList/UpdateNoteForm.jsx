import { STATUS } from "../../data";
import { handleUpdateNote } from "../../helpers";
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

    const modifiedNote = {
      ...updatingNote,
      name: event.target.elements.name.value,
      description: event.target.elements.description.value,
      important: event.target.elements.important.checked,
      status: event.target.elements.status.value,
      dueDate: event.target.elements.dueDate.value,
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
        type="text"
        defaultValue={updatingNote.description}
      />
      <input
        className="form-input"
        id="dueDate"
        type="date"
        defaultValue={updatingNote.dueDate}
      />
      <fieldset className="form-fieldset">
        <input
          className="checkbox-input"
          id="important"
          type="checkbox"
          name="important"
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
        <Button className="save-button" type="submit" label="Save" />
      </div>
    </form>
  );
};