import styled from "styled-components";

import { CancelIcon, DoneIcon } from "~/assets";
import {
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toggle,
} from "~/components";
import {
  ButtonProps,
  GridProps,
  IconButtonProps,
  TableCellProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
  ToggleProps,
} from "~/types";

export const StyledTable = styled((props: TableProps) => <Table {...props} />)`
  margin-top: 1rem;
`;

export const StyledTableBody = styled((props: TableCellProps) => <TableBody {...props} />)``;

export const StyledTableHead = styled((props: TableHeadProps) => <TableHead {...props} />)`
  & > tr > th {
    &:first-child {
      width: 100px;
    }
  }
`;

export const StyledTableRow = styled((props: TableRowProps) => <TableRow {...props} />)``;

export const StyledPersonScheduleTableRow = styled((props: TableRowProps) => (
  <StyledTableRow {...props} />
))``;

export const StyledTableCell = styled((props: TableCellProps) => <TableCell {...props} />)`
  text-align: center;
  border: 1px solid gray;
  padding: 5px;
  &:last-child {
    padding: 5px;
  }
`;

export const THCPersonName = styled((props: TableCellProps) => <StyledTableCell {...props} />)`
  font-weight: bold;
`;

export const TCPersonName = styled((props: TableCellProps) => <StyledTableCell {...props} />)`
  font-weight: bold;
`;

export const StyledGrid = styled((props: GridProps) => <Grid {...props} />)``;

export const StyledGridFromDateToDateGrid = styled((props: GridProps) => <StyledGrid {...props} />)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ToggleScheduleEditing = styled((props: ToggleProps) => <Toggle {...props} />)``;

export const TypeOfShiftButton = styled((props: ButtonProps) => <Button {...props} />)`
  padding: 2px;
  min-width: 30px;
  margin-right: 1rem;
`;

export const ShiftToEditButton = styled((props: ButtonProps) => <Button {...props} />)`
  max-width: 30px;
  min-width: 30px;
`;

export const AcceptNewShiftsButton = styled((props: IconButtonProps) => (
  <IconButton {...props} Icon={DoneIcon} />
))`
  color: #40a340;
  border: 1px solid #40a340;
  margin-right: 1rem;
`;
export const CancelNewShiftsButton = styled((props: IconButtonProps) => (
  <IconButton {...props} Icon={CancelIcon} />
))`
  color: red;
  border: 1px solid red;
`;
