import { ButtonWithIconProps } from "~/types";

import { ButtonText, StyledButtonWithIcon } from "./elements";

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ Icon, text, ...props }) => {
  return (
    <StyledButtonWithIcon {...props}>
      <Icon />
      <ButtonText>{text}</ButtonText>
    </StyledButtonWithIcon>
  );
};
