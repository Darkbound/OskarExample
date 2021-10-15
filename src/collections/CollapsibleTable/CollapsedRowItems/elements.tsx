import styled from "styled-components";

import { DeleteForever, EditIcon } from "~/assets";
import {
  Collapse,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "~/components";
import { GridProps, IconButtonProps } from "~/types";

export const StyledCollapse = styled((props: GridProps) => <Collapse {...props} />)``;

export const PersonContainer = styled((props: GridProps) => <Grid {...props} />)``;

export const PersonDetails = styled((props: GridProps) => <Grid {...props} />)``;

export const PersonDetail = styled((props: GridProps) => <Grid {...props} />)`
  &:first-child {
    margin-top: 1rem;
  }
`;

export const PersonControls = styled((props: GridProps) => <Grid {...props} />)``;

export const EditButton = styled((props: IconButtonProps) => (
  <IconButton {...props} Icon={EditIcon} />
))`
  border: 1px solid #3f51b5;
  color: #3f51b5;
  font-size: 30px;
  margin-top: 1rem;
`;

export const DeleteButton = styled((props: IconButtonProps) => (
  <IconButton {...props} Icon={DeleteForever} />
))`
  border: 1px solid #f50057;
  color: #f50057;
  font-size: 30px;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const PersonSchedule = styled((props: GridProps) => <Grid {...props} />)`
  margin-bottom: 1rem;
`;

export const ScheduleTable = styled((props) => <Table {...props} />)``;

export const ScheduleTableBody = styled((props) => <TableBody {...props} />)``;

export const ScheduleTableHead = styled((props) => <TableHead {...props} />)``;

export const ScheduleTableRow = styled((props) => <TableRow {...props} />)``;

export const ScheduleTableCell = styled((props) => <TableCell {...props} />)`
  border: 1px solid gray;
  text-align: center;
`;
