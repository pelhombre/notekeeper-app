import { NoteItem } from "./NoteItem";

export const NotesList = ({ notes, handleSetNotes }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <NoteItem
          key={index}
          note={note}
          notes={notes}
          handleSetNotes={handleSetNotes}
        />
      ))}
    </ul>
  );
};