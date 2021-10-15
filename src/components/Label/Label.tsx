import { forwardRef } from "react";

import { LabelProps } from "~/types";

import { StyledLabel } from "./elements";

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => (
  <StyledLabel {...props} ref={ref} />
));
