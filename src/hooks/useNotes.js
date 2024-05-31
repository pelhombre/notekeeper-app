import { useEffect, useState } from "react";
import { noteServices } from "../services";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteServices.getNotes()
      .then((notes) => {
        console.log(notes); // Ver la respuesta del servidor
        setNotes([...notes]);
      })
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  const handleSetNotes = (newNotes) => {
    setNotes(newNotes);
  };

  return {
    notes,
    handleSetNotes,
  };
};
