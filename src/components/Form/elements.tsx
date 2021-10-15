import { FormControl, FormControlLabel, FormControlLabelProps } from "@material-ui/core";
import styled from "styled-components";

export const StyledFormControl = styled((props) => <FormControl {...props} />)``;

export const StyledFormControlLabel = styled((props: FormControlLabelProps) => (
  <FormControlLabel {...props} />
))``;

export const StyledForm = styled.form``;
