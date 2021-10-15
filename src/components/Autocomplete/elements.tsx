import { Autocomplete } from "@material-ui/lab";
import styled from "styled-components";

import { AddCircleOutlineIcon } from "~/assets";
import { Grid, IconButton, TextField } from "~/components";
import {
  AutocompleteProps,
  GridProps,
  IconButtonProps,
  MakeRequired,
  TextFieldProps,
} from "~/types";

export const StyledAutocomplete = styled(
  (props: MakeRequired<AutocompleteProps, "renderInput">) => <Autocomplete {...props} />
)``;

const StyledAddCircleOutlineIcon = styled((props) => <AddCircleOutlineIcon {...props} />)`
  font-size: 60px;
`;

export const AddOptionButton = styled((props: IconButtonProps) => (
  <IconButton {...props} Icon={StyledAddCircleOutlineIcon} color="primary" />
))``;

export const StyledGrid = styled((props: GridProps) => <Grid {...props} />)``;

export const AutocompleteTextField = styled((props: TextFieldProps) => <TextField {...props} />)``;
