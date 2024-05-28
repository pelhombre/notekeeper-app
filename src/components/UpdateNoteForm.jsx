import { STATUS } from "../data";
import { handleUpdateNote } from "../helpers/handlers/handleUpdateNote";
import { Button, DropdownList } from "./shared";

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
    handleSetUpdate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        defaultValue={updatingNote.name}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        defaultValue={updatingNote.description}
      />
      <label htmlFor="important">Important</label>
      <input
        id="important"
        type="checkbox"
        defaultValue={updatingNote.important}
      />
      <DropdownList selectedStatus={updatingNote.status} OPTIONS={STATUS} />
      <label htmlFor="dueDate">Due date</label>
      <input id="dueDate" type="date" defaultValue={updatingNote.dueDate} />
      <Button type="submit" label="Save" />
    </form>
  );
};