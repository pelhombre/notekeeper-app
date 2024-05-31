import { useEffect, useState } from "react";
import { noteServices } from "../services/noteServices";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    noteServices.getNotes()
      .then((notes) => {
        console.log(notes);
        setNotes(notes);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
        setError(error.message);
      });
  }, []);

  const handleSetNotes = (newNotes) => {
    setNotes(newNotes);
  };

  return {
    notes,
    handleSetNotes,
    error
  };
};
