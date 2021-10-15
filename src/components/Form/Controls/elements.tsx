import { Input, TextField } from "@material-ui/core";
import styled from "styled-components";

export const StyledCheckboxInput = styled((props) => <Input {...props} type="checkbox" />)``;

export const StyledEmailInput = styled((props) => <Input {...props} type="email" />)``;

export const StyledFileInput = styled((props) => <Input {...props} type="file" />)``;

export const StyledSubmitInput = styled((props) => <Input {...props} type="submit" />)``;

export const StyledRadioInput = styled((props) => <Input {...props} type="radio" />)``;

export const StyledTextField = styled((props) => <TextField {...props} type="text" />)``;
