import { VacationsTableProps } from "~/types";

import { StyledGrid, VacationsTableDataGrid, VacationsTableDataGridContainer } from "./elements";

const columns = [
  { field: "name", headerName: "Name", height: 150, width: 150 },
  { field: "totalPaidLeaveDays", headerName: "Total Paid Leave Days", type: "number", width: 225 },
  {
    field: "availablePaidLeaveDays",
    headerName: "Paid Leave Days Left",
    type: "number",
    width: 225,
  },
  { field: "takenPaidLeaveDays", headerName: "Taken Paid Leave Days", type: "number", width: 250 },
  {
    editable: true,
    field: "takenNonPaidLeaveDays",
    headerName: "Taken Non-Paid Leave Days",
    type: "number",
    width: 250,
  },
];

function generateRandomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

interface PersonPaidLeave {
  availablePaidLeaveDays: number;
  id: number;
  name: string;
  takenNonPaidLeaveDays: number;
  takenPaidLeaveDays: number;
  totalPaidLeaveDays: number;
}
const dummyRowsArray = Array(20).fill(0);
const rows: PersonPaidLeave[] = [
  {
    availablePaidLeaveDays: 20,
    id: 1,
    name: "George",
    takenNonPaidLeaveDays: 3,
    takenPaidLeaveDays: 5,
    totalPaidLeaveDays: 25,
  },
  {
    availablePaidLeaveDays: 20,
    id: 2,
    name: "George",
    takenNonPaidLeaveDays: 3,
    takenPaidLeaveDays: 5,
    totalPaidLeaveDays: 25,
  },
  {
    availablePaidLeaveDays: 20,
    id: 3,
    name: "George",
    takenNonPaidLeaveDays: 3,
    takenPaidLeaveDays: 5,
    totalPaidLeaveDays: 25,
  },
  {
    availablePaidLeaveDays: 20,
    id: 4,
    name: "George",
    takenNonPaidLeaveDays: 3,
    takenPaidLeaveDays: 5,
    totalPaidLeaveDays: 25,
  },
  {
    availablePaidLeaveDays: 20,
    id: 5,
    name: "George",
    takenNonPaidLeaveDays: 3,
    takenPaidLeaveDays: 5,
    totalPaidLeaveDays: 25,
  },
  {
    availablePaidLeaveDays: 20,
    id: 6,
    name: "George",
    takenNonPaidLeaveDays: 3,
    takenPaidLeaveDays: 5,
    totalPaidLeaveDays: 24,
  },
];

const rowsArray = dummyRowsArray.map((_, index) => ({
  ...rows[0],
  id: index,
  takenNonPaidLeaveDays: generateRandomNumberInRange(5, 15),
}));

// const handleCellDoubleClick = (params, event) => {};

// const handleEditCommited = ({ id: _id, field, props: { value } }, event) => {
//   const editedRowIndex = rowsArray.findIndex(({ id }) => id === _id);
//   const rowsArrayCopy = [...rowsArray];

//   rowsArrayCopy[editedRowIndex][field] = parseInt(value);
// };

export const VacationsTable: React.FC<VacationsTableProps> = ({ ...props }) => {
  return (
    <StyledGrid {...props} container item direction="column" justify="center" xs={12}>
      <VacationsTableDataGridContainer item xs={12}>
        <VacationsTableDataGrid
          autoHeight
          autoPageSize
          density="compact"
          rows={rowsArray}
          // onEditCellChangeCommitted={handleEditCommited}
          columns={columns}
          checkboxSelection
          pageSize={20}
          // onCellDoubleClick={handleCellDoubleClick}
        />
      </VacationsTableDataGridContainer>
    </StyledGrid>
  );
};
