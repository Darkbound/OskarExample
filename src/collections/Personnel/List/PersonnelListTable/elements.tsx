import { Container } from "@material-ui/core";
import styled from "styled-components";

import { CollapsibleTable, CollapsibleTableRow } from "~/collections";

export const StyledContainer = styled((props) => <Container {...props} />)`
  max-width: unset;
  margin-left: -8px;
  margin-right: -8px;
`;

export const StyledCollapsibleTable = styled((props) => <CollapsibleTable {...props} />)``;

export const StyledCollapsiblePersonTableRow = styled((props) => (
  <CollapsibleTableRow {...props} />
))``;
