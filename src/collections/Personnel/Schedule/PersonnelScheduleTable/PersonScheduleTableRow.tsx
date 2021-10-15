import { PersonnelScheduleTableRowProps } from "~/types";

import {
  ShiftToEditButton,
  StyledPersonScheduleTableRow,
  StyledTableCell,
  TCPersonName,
} from "./elements";

export const PersonScheduleTableRow: React.FC<PersonnelScheduleTableRowProps> = ({
  editingAllowed,
  daysToRender,
  ...props
}) => {
  return (
    <StyledPersonScheduleTableRow {...props}>
      <TCPersonName>GEORGE</TCPersonName>
      {daysToRender.map((day) =>
        editingAllowed ? (
          <StyledTableCell key={`stcsteb${day}${day + day}`}>
            <ShiftToEditButton variant="outlined" color="primary">
              X
            </ShiftToEditButton>
          </StyledTableCell>
        ) : (
          <StyledTableCell key={`stcsteb${day}${day + day}`}>X</StyledTableCell>
        )
      )}
    </StyledPersonScheduleTableRow>
  );
};
