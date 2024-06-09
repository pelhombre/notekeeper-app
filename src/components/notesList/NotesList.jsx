import { NoteItem } from "./NoteItem";

import "./NotesList.css";

export const NotesList = ({ notes, handleSetNotes }) => {
  return (
    <ul className="notes-list">
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
