/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppBar, Toolbar } from "@material-ui/core";
import { forwardRef } from "react";
import styled, { css } from "styled-components";

import { Link } from "~/components";
import { HeaderItemProps } from "~/types";

export const StyledHeader = styled((props) => <AppBar {...props} />)``;

export const StyledToolbar = styled((props) => <Toolbar {...props} />)``;

export const StyledHeaderItem = styled(
  forwardRef<HTMLAnchorElement, HeaderItemProps>(
    ({ text, isActive, ...props }: HeaderItemProps, ref) => <Link ref={ref} {...props} />
  )
)`
  padding: auto;
  text-decoration: none;
  margin-right: 1rem;
  color: white;
  font-weight: bold;
  &&:hover {
    text-decoration: none;
    border-bottom: 2px solid red;
  }
  &&:focus {
    text-decoration: none;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 4px solid red;
    `}
`;
