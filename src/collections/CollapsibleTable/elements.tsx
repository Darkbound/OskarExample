import { Paper } from "@material-ui/core";
import styled from "styled-components";

import {
  Collapse,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "~/components";

const StyledPaper = styled((props) => <Paper square {...props} />)``;

export const StyledCollapse = styled((props) => <Collapse {...props} />)``;

export const StyledCollapsedTableHeadRow = styled((props) => <TableRow {...props} />)`
  & > * {
    border-bottom: unset;
  }
`;

export const StyledCollapsedTableHeadCell = styled((props) => <TableCell {...props} />)``;

export const StyledTableHeadCell = styled((props) => <TableCell {...props} />)``;

export const StyledTableContainer = styled((props) => (
  <TableContainer component={StyledPaper} {...props} />
))`
  margin-top: 1rem;
`;

export const StyledTable = styled((props) => <Table {...props} />)``;

export const StyledTableBody = styled((props) => <TableBody {...props} />)``;

export const StyledTableHead = styled((props) => <TableHead {...props} />)``;

export const StyledTableRow = styled((props) => <TableRow {...props} />)``;

export const StyledTableCell = styled((props) => <TableCell {...props} />)`
  padding-top: 0px;
  padding-bottom: 0px;
`;

export const StyledGrid = styled((props) => <Grid {...props} />)``;
