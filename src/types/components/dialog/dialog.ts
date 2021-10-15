import { DialogProps as MuiDialogProps } from "@material-ui/core";
import { FormikProps } from "formik";

import { Any } from "~/types";
export interface DialogProps extends MuiDialogProps {
  formId?: string;
  open: boolean;
  loading?: boolean;
  handleClose: () => void;
  title: string;
  formik?: FormikProps<Any>;
}

export type DialogWrapperProps = MuiDialogProps;
