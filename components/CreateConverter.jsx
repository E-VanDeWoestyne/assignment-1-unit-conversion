// Created 05-02-25
// Component to allow individual webpages to create a unit
// converter by providing the unit to convert to and from.

const CreateConverter = (fromUnit, toUnit) => {
  const conversions = {
    kgToLb: (kg) => kg * 2.20462,
    lbToKg: (lb) => lb / 2.20462,
    kmToMi: (km) => km * 0.621371,
    miToKm: (mi) => mi / 0.621371,
    cToF: (c) => (c * 9) / 5 + 32,
    fToC: (f) => ((f - 32) * 5) / 9,
  };

  const conversionKey = `${fromUnit}To${toUnit}`;
  return (input) => {
    if (Array.isArray(input)) {
      return input.map((value) => conversions[conversionKey](value));
    } else {
      return conversions[conversionKey](input);
    }
  };
};

export default CreateConverter;
