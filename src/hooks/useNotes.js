import { useEffect, useState } from "react";
import { noteServices } from "../services/noteServices.js";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteServices.getNotes().then(({ notes }) => {
      const notesWithNumberIds = notes.map(note => ({
        ...note,
        id: Number(note.id)
      }));
      setNotes(notesWithNumberIds);
    });
  }, []);

  const handleSetNotes = (newNotes) => {
    const notesWithNumberIds = newNotes.map(note => ({
      ...note,
      id: Number(note.id)
    }));
    setNotes(notesWithNumberIds);
  };

  return {
    notes,
    handleSetNotes,
  };
};
