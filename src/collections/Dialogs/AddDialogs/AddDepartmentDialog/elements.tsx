import styled from "styled-components";

import { AddCircleOutlineIcon } from "~/assets";
import {
  Autocomplete,
  DialogContent,
  DialogTitle,
  Form,
  FormikTextField,
  IconButton,
  TextField,
  Typography,
} from "~/components";
import { Dialog } from "~/components";
import {
  AutocompleteProps,
  DialogContentProps,
  DialogProps,
  DialogTitleProps,
  FormikTextFieldProps,
  IconButtonProps,
  TextFieldProps,
  TypographyProps,
} from "~/types";

export const StyledAddDepartmentDialog = styled((props: DialogProps) => <Dialog {...props} />)``;

export const StyledDialogTitle = styled((props: DialogTitleProps) => <DialogTitle {...props} />)``;

export const StyledDialogContent = styled((props: DialogContentProps) => (
  <DialogContent {...props} />
))``;

export const AddDepartmentDialogTitle = styled((props: TypographyProps) => (
  <Typography {...props} />
))``;

export const StyledTypography = styled((props: TypographyProps) => <Typography {...props} />)``;

export const AddDepartmentForm = styled((props) => <Form {...props} />)``;

export const StyledFormikTextField = styled((props: FormikTextFieldProps & TextFieldProps) => (
  <FormikTextField {...props} fullWidth />
))``;

export const StyledTextField = styled((props: TextFieldProps) => <TextField {...props} />)``;

export const StyledAutocomplete = styled((props: AutocompleteProps) => (
  <Autocomplete {...props} />
))``;

const StyledAddCircleOutlineIcon = styled((props) => <AddCircleOutlineIcon {...props} />)`
  font-size: 60px;
`;

export const AddEmployeeSkillButton = styled((props: IconButtonProps) => (
  <IconButton {...props} Icon={StyledAddCircleOutlineIcon} color="primary" />
))``;
