import { OnOffButtonProps } from "types/components";

import { StyledOnOffButton } from "./elements";

export const OnOffButton: React.FC<OnOffButtonProps> = ({ OnIcon, OffIcon, state, ...props }) => {
  return <StyledOnOffButton {...props}>{state ? <OnIcon /> : <OffIcon />}</StyledOnOffButton>;
};
