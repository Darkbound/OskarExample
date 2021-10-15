import { Any, AutocompleteOption, AutocompleteProps, TextFieldProps } from "~/types";

import { AddOptionButton, AutocompleteTextField, StyledAutocomplete, StyledGrid } from "./elements";

export const Autocomplete: React.FC<AutocompleteProps> = ({
  addOptionOnClick,
  id,
  formik,
  inputLabel,
  multiple = false,
  controlledDefaultValue,
  options,
  controlledOnChange,
  ...props
}) => {
  //FIXME: If options change, check if thre is already a selected option and if that option is still present in the new list of options
  // and if the already serlected options have options that are not contained in the new options list, REMOVE THEM

  const handleOnChange = (
    event: React.ChangeEvent<Record<Any, Any>>,
    value: AutocompleteOption | AutocompleteOption[]
  ) => {
    const adaptedValue =
      value instanceof Array
        ? value.map((value) => (value as AutocompleteOption).value)
        : value.value;

    formik && id && formik.setFieldValue(id, adaptedValue);

    // This part requires one more reason prop. Material UI's Auto Complete will have documentation about it
    controlledOnChange && controlledOnChange(event, value, "select-option");
  };

  const adaptedControlledDefaultValue = controlledDefaultValue && {
    value: controlledDefaultValue ? controlledDefaultValue : [],
  };

  return (
    <>
      <StyledAutocomplete
        {...props}
        options={options}
        multiple={multiple}
        onChange={(event, value) =>
          handleOnChange(event, value as AutocompleteOption | AutocompleteOption[])
        }
        id={id}
        {...adaptedControlledDefaultValue}
        getOptionLabel={({ title }) => title}
        getOptionSelected={(option, value) => option.value === value.value}
        renderInput={(params: TextFieldProps) => (
          <StyledGrid container direction="row" alignItems="center">
            <StyledGrid item xs={addOptionOnClick ? 11 : 12}>
              <AutocompleteTextField
                {...params}
                label={inputLabel}
                {...(formik &&
                  id && {
                    error: formik.touched[id] && Boolean(formik.errors[id]),
                    helperText: formik.touched[id] && formik.errors[id],
                    value: formik.values[id],
                  })}
              />
            </StyledGrid>
            {addOptionOnClick && (
              <StyledGrid item xs={1}>
                <AddOptionButton onClick={addOptionOnClick} />
              </StyledGrid>
            )}
          </StyledGrid>
        )}
      />
    </>
  );
};
