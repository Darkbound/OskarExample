const stringLength = (value: string | undefined, min: number, max: number): boolean =>
  value !== undefined && value.length >= min && value.length <= max;

export const yupTest = {
  stringLength,
};

export const yupValidationMessage = {
  lengthBetween: (min: number, max: number): string =>
    `Must be between ${min} and ${max} characters!`,
  lengthExactly: (exactLength: number): string => `Must be exactly ${exactLength} characters!`,
  valueBetween: (min: number, max: number, unit: boolean | string = false): string =>
    `Value must be between ${min} and ${max}${unit ? unit : ""}`,
};

export const whatthefuckbro = 5;
