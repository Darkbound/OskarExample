import { Menu } from "@material-ui/core";
import styled from "styled-components";

import { Grid } from "~/components";

export const StyledGrid = styled((props) => <Grid {...props} />)`
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const StyledMenu = styled((props) => (
  <Menu
    {...props}
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      horizontal: "center",
      vertical: "bottom",
    }}
    transformOrigin={{
      horizontal: "center",
      vertical: "top",
    }}
  />
))`
  & > .MuiMenu-paper {
    border: 1px solid #d3d4d5;
  }
`;

/**
 * MUI code:
 * how to target the Paper component with styled, other than with a class as above?
 * 
 * const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
    },
   })
 * 
 */
