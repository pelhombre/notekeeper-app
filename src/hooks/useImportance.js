import { useState } from "react";

export const useImportance = (noteImportance) => {
  const [importance, setImportance] = useState(noteImportance);

  const handleSetImportance = () => {
    setImportance((prevImportance) => !prevImportance);
  };

  return {
    importance,
    handleSetImportance,
  };
};