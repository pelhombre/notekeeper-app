import { handleDeleteNote } from "../helpers/handlers";
import { Button } from "./shared";

export const Note = ({ note, handleSetNotes, handleSetUpdate }) => {
  const importance = note.important ? "important" : "";

  return (
    <li className={`note-element ${importance}`}>
      {`${note.name} | ${note.description} | IMPORTANT: ${note.important}`}
      <Button
        action={() => handleDeleteNote(note.id, handleSetNotes)}
        label="Delete"
      />
      <Button action={() => handleSetUpdate()} label="Edit" />
    </li>
  );
};