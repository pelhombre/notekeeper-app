import { handleCreateNote } from "../helpers/handlers/handleCreateNote";
import { STATUS } from "../data";
import { Button } from "./shared";

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="description">Description</label>
      <input id="description" type="text" name="description" />
      <label htmlFor="important">Important</label>
      <input id="important" type="checkbox" name="important" />
      <select name="status" id="status">
        {Object.values(STATUS).map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="dueDate">Due date</label>
      <input id="dueDate" type="date" name="dueDate" />
      <Button type="submit" label="create" />
    </form>
  );
};