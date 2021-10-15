import styled from "styled-components";

import { MenuIcon } from "~/assets";
import { IconButton } from "~/components";
import { ButtonProps } from "~/types";

export const StyledToggleSideMenuButton = styled((props) => <MenuIcon {...props} />)`
  color: white;
  font-size: 40px;
  margin-left: -16px;
`;

export const StyledIconButton = styled((props: ButtonProps) => <IconButton {...props} />)``;
