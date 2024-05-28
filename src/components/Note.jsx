import { handleDeleteNote } from "../helpers/handlers";
import { Button } from "./shared";

export const Note = ({ note, handleSetNotes }) => {
  return (
    <li>
      {`${note.name} | ${note.description} | IMPORTANT: ${note.important}`}
      <Button
        action={() => handleDeleteNote(note.id, handleSetNotes)}
        label="Delete"
      />
    </li>
  );
};