import styled from "styled-components";

import { Dialog } from "~/components";
import {
  Autocomplete,
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

export const StyledAddEmployeeSkillDialog = styled((props: DialogProps) => <Dialog {...props} />)``;

export const AddEmployeeSkillDialogTitle = styled((props: DialogTitleProps) => (
  <DialogTitle {...props} />
))``;

export const AddEmployeeSkillDialogContent = styled((props: DialogContentProps) => (
  <DialogContent {...props} />
))``;

export const TypographedTitle = styled((props: TypographyProps) => <Typography {...props} />)``;

export const StyledTextField = styled((props: TextFieldProps) => <TextField {...props} />)``;

export const StyledFormikTextField = styled((props: FormikTextFieldProps) => (
  <FormikTextField {...props} />
))``;

export const StyledAutocomplete = styled((props: AutocompleteProps) => (
  <Autocomplete {...props} />
))``;
