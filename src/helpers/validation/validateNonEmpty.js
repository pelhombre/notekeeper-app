export const validateNonEmpty = (validatingObject) => {
  const stringProperties = Object.values(validatingObject).filter(
    (propertyValue) => typeof propertyValue === "string",
  );

  const isNotEmpty = stringProperties.every(
    (stringProperty) => stringProperty.trim() !== "", 
  );

  return isNotEmpty;
};
