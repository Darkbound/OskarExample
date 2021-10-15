import { FormControlLabelProps } from "@material-ui/core";

import { StyledFormControlLabel } from "./elements";

export const FormControlLabel: React.FC<FormControlLabelProps> = ({ ...props }) => {
  return <StyledFormControlLabel {...props} />;
};
