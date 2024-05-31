import { validateEnum, validateNonEmpty, validateType } from "../validation";
import { STATUS } from "../../data";

export const handleValidateNote = (note) => {
  validateNonEmpty(note.name);
  validateNonEmpty(note.description);
  validateType(note.important, 'boolean');
  validateEnum(note.status, Object.values(STATUS));
  validateNonEmpty(note.dueDate);
};