import styled from "styled-components";

import {
  Autocomplete,
  Dialog,
  DialogContent,
  DialogTitle,
  FormikTextField,
  TextField,
  Typography,
} from "~/components";
import {
  AutocompleteProps,
  DialogContentProps,
  DialogProps,
  DialogTitleProps,
  FormikTextFieldProps,
  TextFieldProps,
  TypographyProps,
} from "~/types";

export const StyledAddEmployeeDialog = styled((props: DialogProps) => <Dialog {...props} />)``;

export const AddEmployeeDialogTitle = styled((props: DialogTitleProps) => (
  <DialogTitle {...props} />
))``;

export const AddEmployeeDialogContent = styled((props: DialogContentProps) => (
  <DialogContent {...props} />
))``;

export const TypographyTitle = styled((props: TypographyProps) => <Typography {...props} />)``;

export const StyledFormikTextField = styled((props: FormikTextFieldProps) => (
  <FormikTextField {...props} fullWidth />
))``;

export const StyledTextField = styled((props: TextFieldProps) => <TextField {...props} />)``;

export const StyledAutocomplete = styled((props: AutocompleteProps) => (
  <Autocomplete {...props} />
))``;

// FIXME: Complaining about fullWidth but it exists?
