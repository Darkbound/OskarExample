import { Drawer } from "@material-ui/core";
import styled from "styled-components";

import { Link, ListItem, Typography } from "~/components";
import { LinkProps, ListItemProps } from "~/types";

export const StyledDrawerMenu = styled((props) => <Drawer {...props} />)`
  width: 400px;
`;

export const StyledDrawerMenuItem = styled.div``;

export const StyledListItem = styled((props: ListItemProps) => <ListItem {...props} />)``;

export const StyledLink = styled((props: LinkProps) => <Link {...props} />)``;

export const StyledIcon = styled.div`
  display: inline-block;
`;

export const StyledTypography = styled((props) => <Typography {...props} />)`
  display: inline-block;
  color: red;
`;
