import { GridProps } from "@material-ui/core";
import styled from "styled-components";

import { Button, Grid, KeyboardDatePicker } from "~/components";

export const StyledKeyboardDatePicker = styled((props) => <KeyboardDatePicker {...props} />)``;

export const StyledFromDateToDateGrid = styled((props: GridProps) => <Grid {...props} />)`
  margin-right: 1rem;
`;

export const SetDatesButton = styled((props) => <Button {...props} />)`
  font-weight: bold;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
