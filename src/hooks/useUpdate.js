import { useState } from "react";

export const useUpdate = () => {
  const [update, setUpdate] = useState(false);

  const handleSetUpdate = () => {
    setUpdate(!update);
  };

  return {
    update,
    handleSetUpdate,
  };
};