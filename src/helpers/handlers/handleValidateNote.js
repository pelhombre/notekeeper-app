import { validateEnum, validateNonEmpty, validateType } from "../validation";
import { STATUS } from "../../data";

export const handleValidateNote = (note) => {
  return (
    validateEnum(note.status, STATUS) &&
    validateNonEmpty(note) &&
    validateType(note)
  );
};
