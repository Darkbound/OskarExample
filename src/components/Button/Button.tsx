import { ButtonProps } from "~/types";

import { StyledButton } from "./elements";

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <StyledButton {...props} />;
};
