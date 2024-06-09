import { useEffect, useState } from "react";
import { noteServices } from "../services/noteServices.js";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteServices.getNotes()
      .then((data) => {
        if (data && Array.isArray(data.notes)) {
          const notesWithNumberIds = data.notes.map(note => ({
            ...note,
            id: Number(note.id)
          }));
          setNotes(notesWithNumberIds);
        }
      })
      .catch(error => {
        console.error("Error fetching notes:", error);
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
