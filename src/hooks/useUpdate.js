import { useState } from "react";

export const useUpdate = () => {
  const [update, setUpdate] = useState(false);

  const handleSetUpdate = () => {
    setUpdate((prevState) => !prevState);
  };

  return {
    update,
    handleSetUpdate,
  };
};
