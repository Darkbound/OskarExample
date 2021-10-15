import React from "react";

import { DialogProps } from "~/types";

import {
  CancelButton,
  DialogWrapper,
  DoneButton,
  StyledDialogActions,
  StyledDialogContent,
  StyledDialogTitle,
  StyledTypography,
} from "./elements";

export const Dialog: React.FC<DialogProps> = ({
  open,
  handleClose,
  formId,
  loading,
  title,
  formik,
  children,
  ...props
}) => {
  const handleCancel = () => {
    formik?.resetForm();
    handleClose();
  };

  return (
    <DialogWrapper {...props} open={open} onClose={handleClose} fullWidth>
      <StyledDialogTitle disableTypography>
        <StyledTypography>{title}</StyledTypography>
      </StyledDialogTitle>
      <StyledDialogContent>{children}</StyledDialogContent>
      <StyledDialogActions>
        <CancelButton
          disabled={loading}
          onClick={handleCancel}
          variant="contained"
          color="secondary"
        >
          Cancel
        </CancelButton>
        <DoneButton disabled={loading} form={formId} variant="contained" color="primary">
          Done
        </DoneButton>
      </StyledDialogActions>
    </DialogWrapper>
  );
};
