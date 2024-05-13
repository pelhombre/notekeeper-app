import { validateNonEmpty } from "../../validateNonEmpty";
import { describe, test, expect } from "@jest/globals";

describe("Given an object type variable", () => {
  const STATUS = {
    PENDING: "pending",
    IN_PROGRESS: "in progress",
    DONE: "done",
  };

  test("When no object properties are empty then a truthy boolean should be returned", () => {
    //Arrange
    const note = {
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: STATUS.PENDING,
      due_date: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
      created_at: Date.now(),
    };

    //Act
    const result = validateNonEmpty(note);

    //Assert
    expect(result).toBe(true);
  });

  test("When any object property is empty then a falsy boolean should be returned", () => {
    //Arrange
    const note = {
      name: "",
      description: "Go to the park",
      important: false,
      status: STATUS.PENDING,
      due_date: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
      created_at: Date.now(),
    };

    //Act
    const result = validateNonEmpty(note);

    //Assert
    expect(result).toBe(false);
  });
});