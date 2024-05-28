import { handleCreateNote } from "../helpers/handlers/handleCreateNote";
import { STATUS } from "../data";
import { Button } from "./shared";
import PropTypes from 'prop-types';

// Elimina la importación de React si estás usando el nuevo transformador de JSX
// import React from 'react';

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
      <label htmlFor="name">Nombre</label>
      <input id="name" type="text" name="name" required />
      <label htmlFor="description">Descripción</label>
      <input id="description" type="text" name="description" required />
      <label htmlFor="important">Importante</label>
      <input id="important" type="checkbox" name="important" />
      <label htmlFor="status">Estado</label>
      <select name="status" id="status" required>
        {Object.values(STATUS).map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="dueDate">Fecha de vencimiento</label>
      <input id="dueDate" type="date" name="dueDate" required />
      <Button type="submit" label="Crear" />
    </form>
  );
};

CreateNoteForm.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      important: PropTypes.bool,
      status: PropTypes.string,
      dueDate: PropTypes.string
    })
  ).isRequired,
  handleSetNotes: PropTypes.func.isRequired,
};
