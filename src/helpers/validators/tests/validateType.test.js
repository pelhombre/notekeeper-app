import { validateType } from "../../validateType";
import { describe, test, expect } from "@jest/globals";

describe("Given note object", () => {
  const STATUS = {
    PENDING: "pending",
    IN_PROGRESS: "in progress",
    DONE: "done",
  };

  test("When each property of the note object has the correct data type then a truthy boolean should be returned", () => {
    // Arrange
    const note = {
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: STATUS.PENDING,
      dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    };

    // Act
    const result = validateType(note);

    // Assert
    expect(result).toBe(true);
  });

  test("When one or more properties object has an incorrect data type then a falsy boolean should be returned", () => {
    //Arrange
    const note = {
      name: 1,
      description: "Go to the park",
      important: false,
      status: STATUS.PENDING,
      dueDate: new Intl.DateTimeFormat("en-EN").format(new Date(Date.now())),
    };

    //Act
    const result = validateType(note);

    //Assert
    expect(result).toBe(false);
  });
});