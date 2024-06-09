import { Button } from "../shared";

import "./NoteBody.css";

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
