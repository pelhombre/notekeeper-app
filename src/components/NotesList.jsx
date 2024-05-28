import { Note } from "./Note";

export const NotesList = ({ notes, handleSetNotes }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <Note key={index} note={note} handleSetNotes={handleSetNotes} />
      ))}
    </ul>
  );
};