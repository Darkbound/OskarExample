import { forwardRef } from "react";

import { TextProps } from "~/types";

import { StyledText } from "./elements";

export const Text: React.FC<TextProps> = forwardRef<HTMLSpanElement, TextProps>((props, ref) => (
  <StyledText ref={ref} {...props} />
));
