import { Collapse } from "@material-ui/core";
import styled from "styled-components";

import { ExpandLess, ExpandMore } from "~/assets";
import { IconButton } from "~/components";

export const StyledCollapse = styled((props) => <Collapse {...props} />)``;

export const StyledExpandIcon = styled((props) => <ExpandMore {...props} />)``;

export const StyledCollapseIcon = styled((props) => <ExpandLess {...props} />)``;

export const StyledIconButton = styled((props) => <IconButton {...props} />)``;
