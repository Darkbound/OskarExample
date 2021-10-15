import { useEffect, useState } from "react";

import { FromDateToDate } from "~/collections";
import { ScheduleTableProps } from "~/types";
import { getDaysBetweenTwoDates } from "~/utils";

import {
  AcceptNewShiftsButton,
  CancelNewShiftsButton,
  StyledGrid,
  StyledGridFromDateToDateGrid,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
  THCPersonName,
  ToggleScheduleEditing,
  TypeOfShiftButton,
} from "./elements";
import { PersonScheduleTableRow } from "./PersonScheduleTableRow";

const today = new Date();
const twoWeeksAhead = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 13);
const typesOfShifts = ["F", "S", "N", "SI", "L", "X"];

export const PersonnelScheduleTable: React.FC<ScheduleTableProps> = ({ ...props }) => {
  const [scheduleDates, setScheduleDates] = useState<[Date, Date]>([today, twoWeeksAhead]);
  const [editingAllowed, setEditingAllowed] = useState<boolean>(false);
  const [currentlySelectedShift, setCurrentlySelectedShift] = useState<string>("");
  const [daysToRender, setDaysToRender] = useState<number[]>(getDaysBetweenTwoDates(scheduleDates));

  useEffect(() => {
    setDaysToRender(getDaysBetweenTwoDates(scheduleDates));
  }, [scheduleDates]);

  const getScheduleDates = (fromDate: Date, toDate: Date) => {
    setScheduleDates([fromDate, toDate]);
  };

  const toggleScheduleEditingOnChange = () => {
    setEditingAllowed((prevState) => !prevState);
  };

  const selectShiftToSetButtonOnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    shiftSymbol: string
  ) => {
    setCurrentlySelectedShift(shiftSymbol);
  };

  return (
    <StyledGrid container {...props}>
      <StyledGridFromDateToDateGrid
        container
        item
        direction="row"
        justify="flex-start"
        alignItems="center"
        xs={12}
      >
        <StyledGrid item xs={1} />
        <StyledGrid item xs={6}>
          <FromDateToDate
            maxDays={20}
            fromLabel="From"
            defaultFromDate={today}
            defaultToDate={twoWeeksAhead}
            toLabel="To"
            buttonLabel="Set Dates"
            getDates={getScheduleDates}
          />
        </StyledGrid>
        <StyledGrid item xs={3} />

        <StyledGrid container item alignItems="center" justify="flex-end" xs={1}>
          <ToggleScheduleEditing onChange={toggleScheduleEditingOnChange} />
        </StyledGrid>
      </StyledGridFromDateToDateGrid>
      {editingAllowed && (
        <StyledGrid container item direction="row" justify="center" xs={12}>
          <StyledGrid container item xs={11}>
            <StyledGrid container item justify="flex-start" xs={2}>
              <AcceptNewShiftsButton />
              <CancelNewShiftsButton />
            </StyledGrid>
            <StyledGrid item container alignItems="center" xs={10}>
              {typesOfShifts.map((shiftSymbol, index) => (
                <TypeOfShiftButton
                  key={`tosb${shiftSymbol}${index}`}
                  variant={currentlySelectedShift === shiftSymbol ? "contained" : "outlined"}
                  color="primary"
                  onClick={(e) => {
                    selectShiftToSetButtonOnClick(e, shiftSymbol);
                  }}
                >
                  {shiftSymbol}
                </TypeOfShiftButton>
              ))}
            </StyledGrid>
          </StyledGrid>
        </StyledGrid>
      )}
      <StyledGrid container item direction="row" justify="center" xs={12}>
        <StyledGrid item xs={11}>
          <StyledTable size="small">
            <StyledTableHead>
              <StyledTableRow>
                <THCPersonName>NAME</THCPersonName>

                {daysToRender.map((day) => (
                  <StyledTableCell key={`stc${day}${day + day}`}>{day}</StyledTableCell>
                ))}
              </StyledTableRow>
            </StyledTableHead>
            <StyledTableBody>
              <PersonScheduleTableRow editingAllowed={editingAllowed} daysToRender={daysToRender} />
            </StyledTableBody>
          </StyledTable>
        </StyledGrid>
      </StyledGrid>
    </StyledGrid>
  );
};
