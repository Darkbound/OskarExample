import { FormikTextFieldProps, TextFieldProps } from "~/types";

import { StyledTextField } from "./elements";

export const FormikTextField: React.FC<FormikTextFieldProps & TextFieldProps> = ({
  id,
  formik,
  ...props
}) => {
  const formikFields = formik
    ? {
        error: formik.touched[id] && Boolean(formik.errors[id]),
        helperText: formik.touched[id] && formik.errors[id],
        id: id,
        name: id,
        onChange: formik.handleChange,
        value: formik.values[id],
      }
    : {};
  return <StyledTextField {...props} {...formikFields} />;
};
