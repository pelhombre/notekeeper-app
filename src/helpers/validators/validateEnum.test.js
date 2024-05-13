import { validateEnum } from "../validateEnum";
import { describe, test, expect } from "@jest/globals";

describe("Given enum property and expected values object", () => {
  const STATUS = {
    PENDING: "pending",
    IN_PROGRESS: "in progress",
    DONE: "done",
  };

  test("When the property contains a value from the predefined set of options then a truthy boolean should be returned", () => {
    //Arrange
    const enumProperty = "pending";

    //Act
    const result = validateEnum(enumProperty, STATUS);

    //Assert
    expect(result).toBe(true);
  });

  test("When the property contains a value not predefined set of options then a falsy boolean should be returned", () => {
    //Arrange
    const enumProperty = "hello";

    //Act
    const result = validateEnum(enumProperty, STATUS);

    //Assert
    expect(result).toBe(false);
  });
});