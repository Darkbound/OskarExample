import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

import { Button } from "~/components";
import {
  ButtonProps,
  DialogActionsProps,
  DialogContentProps,
  DialogContentTextProps,
  DialogTitleProps,
  DialogWrapperProps,
  TypographyProps,
} from "~/types";

export const DialogWrapper = styled((props: DialogWrapperProps) => <Dialog {...props} />)``;

export const StyledDialogActions = styled((props: DialogActionsProps) => (
  <DialogActions {...props} />
))``;

export const StyledDialogContent = styled((props: DialogContentProps) => (
  <DialogContent {...props} />
))``;

export const StyledDialogContentText = styled((props: DialogContentTextProps) => (
  <DialogContentText {...props} />
))``;

export const StyledDialogTitle = styled((props: DialogTitleProps) => <DialogTitle {...props} />)``;

export const StyledTypography = styled((props: TypographyProps) => <Typography {...props} />)``;

export const CancelButton = styled((props: ButtonProps) => <Button {...props} />)``;

export const DoneButton = styled((props: ButtonProps) => <Button type="submit" {...props} />)``;
