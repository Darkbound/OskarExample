import { FormikProps } from "formik";

import { Any } from "~/types";

export interface FormikTextFieldProps {
  id: string;
  formik?: FormikProps<Any>;
  label?: string;
  name?: string;
  noId?: boolean;
  fullWidth?: boolean;
}
