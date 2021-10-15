import { IconButtonProps } from "~/types";

import { StyledIconButton } from "./elements";

export const IconButton: React.FC<IconButtonProps> = ({ Icon, children, ...props }) => {
  return <StyledIconButton {...props}>{Icon ? <Icon /> : children}</StyledIconButton>;
};
