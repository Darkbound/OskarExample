import { DrawerMenuItemProps } from "~/types";

import {
  StyledDrawerMenuItem,
  StyledIcon,
  StyledLink,
  StyledListItem,
  StyledTypography,
} from "./elements";

export const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({
  onClick,
  SvgIcon,
  href,
  text,
  ...props
}) => {
  return (
    <StyledDrawerMenuItem {...props}>
      <StyledListItem onClick={onClick}>
        <StyledLink href={href}>
          <StyledIcon>
            <SvgIcon />
          </StyledIcon>

          <StyledTypography>{text}</StyledTypography>
        </StyledLink>
      </StyledListItem>
    </StyledDrawerMenuItem>
  );
};
