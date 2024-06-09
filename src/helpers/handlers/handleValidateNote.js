import { validateEnum, validateNonEmpty, validateType } from "../validation";
import { STATUS } from "../../data";

export const handleValidateNote = (note) => {
  const isNonEmpty = validateNonEmpty(note);
  const isValidType = validateType(note);
  const isValidStatus = validateEnum(note.status, STATUS);

  console.log("Validation results:", { isNonEmpty, isValidType, isValidStatus });

  return isNonEmpty && isValidType && isValidStatus;
};
