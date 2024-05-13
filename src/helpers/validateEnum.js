export const validateEnum = (enumProperty, enumObject) => {
    const expectedValues = Object.values(enumObject);
  
    const result = expectedValues.some(
      (expectedValue) => expectedValue === enumProperty,
    );
  
    return result;
  };