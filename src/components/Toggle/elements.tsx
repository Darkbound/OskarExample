import { Switch } from "@material-ui/core";
import styled from "styled-components";

import { ToggleProps } from "~/types";

export const StyledToggle = styled((props: ToggleProps) => <Switch {...props} />)``;
