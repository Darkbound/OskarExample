import { DataGrid, DataGridProps } from "@material-ui/data-grid";
import styled from "styled-components";

import { Grid } from "~/components";
import { GridProps } from "~/types";

export const StyledGrid = styled((props: GridProps) => <Grid {...props} />)`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
`;

export const VacationsTableDataGridContainer = styled((props: GridProps) => <Grid {...props} />)``;

export const VacationsTableDataGrid = styled((props: DataGridProps) => <DataGrid {...props} />)``;
