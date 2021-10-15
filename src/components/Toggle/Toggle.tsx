import { ToggleProps } from "~/types";

import { StyledToggle } from "./elements";

export const Toggle: React.FC<ToggleProps> = ({ ...props }) => {
  return <StyledToggle {...props} />;
};
