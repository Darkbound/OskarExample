import { AutocompleteAddOptionProps } from "~/types";

import { ButtonIcon, ButtonText, StyledAddOptionButton } from "./elements";

export const AutocompleteAddOption: React.FC<AutocompleteAddOptionProps> = ({ text, ...props }) => {
  return (
    <StyledAddOptionButton {...props}>
      <ButtonIcon /> <ButtonText variant="h6">{text}</ButtonText>
    </StyledAddOptionButton>
  );
};
