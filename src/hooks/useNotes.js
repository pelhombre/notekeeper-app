import { useEffect, useState } from "react";
import { noteServices } from "../services";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteServices.getNotes().then(({ notes }) => setNotes(notes));
  }, []);

  const handleSetNotes = (newNotes) => {
    setNotes(newNotes);
  };

  return {
    notes,
    handleSetNotes,
  };
};
