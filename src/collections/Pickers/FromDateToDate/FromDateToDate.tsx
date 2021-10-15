import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useState } from "react";

import { FromDateToDateProps } from "~/types";
import { getDaysBetweenTwoDates } from "~/utils";

import { SetDatesButton, StyledFromDateToDateGrid, StyledKeyboardDatePicker } from "./elements";

export const FromDateToDate: React.FC<FromDateToDateProps> = ({
  fromLabel,
  toLabel,
  buttonLabel,
  defaultFromDate,
  defaultToDate,
  maxDays,
  getDates,
  ...props
}) => {
  const [fromDate, setFromDate] = useState(defaultFromDate || new Date());
  const [fromDateHelperText, setFromDateHelperText] = useState<string>("Choose date");
  const [toDate, setToDate] = useState(defaultToDate || new Date());
  const [toDateHelperText, setToDateHelperText] = useState<string>("Choose date");

  const handleFromDateOnChange = (newFromDate: Date) => {
    const daysInBetween = getDaysBetweenTwoDates([newFromDate, toDate]).length;

    if (daysInBetween <= 0) {
      setFromDateHelperText("From date must be before To date");
    } else if (daysInBetween > maxDays) {
      setFromDateHelperText(`From and To dates must have up to ${maxDays} days difference`);
    } else {
      setFromDateHelperText(`Choose date`);
      setToDateHelperText(`Choose date`);
      setFromDate(newFromDate);
    }
  };

  const handleToDateOnChange = (newToDate: Date) => {
    const daysInBetween = getDaysBetweenTwoDates([fromDate, newToDate]).length;

    if (daysInBetween <= 0) {
      setToDateHelperText("To date must be before To date");
    } else if (daysInBetween > maxDays) {
      setToDateHelperText(`From and To dates must have up to ${maxDays} days difference`);
    } else {
      setFromDateHelperText(`Choose date`);
      setToDateHelperText(`Choose date`);
      setToDate(newToDate);
    }
  };

  const setDatesButtonOnClick = () => {
    getDates(fromDate, toDate);
  };

  return (
    <StyledFromDateToDateGrid container item direction="row" {...props}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <StyledFromDateToDateGrid item xs={4}>
          <StyledKeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label={fromLabel}
            value={fromDate}
            format="dd/MM/yyyy"
            helperText={fromDateHelperText}
            onChange={handleFromDateOnChange}
          />
        </StyledFromDateToDateGrid>
        <StyledFromDateToDateGrid item xs={4}>
          <StyledKeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label={toLabel}
            value={toDate}
            format="dd/MM/yyyy"
            helperText={toDateHelperText}
            onChange={handleToDateOnChange}
          />
        </StyledFromDateToDateGrid>
        <StyledFromDateToDateGrid item xs={3}>
          <SetDatesButton variant="contained" color="primary" onClick={setDatesButtonOnClick}>
            {buttonLabel}
          </SetDatesButton>
        </StyledFromDateToDateGrid>
        <StyledFromDateToDateGrid item xs={1} />
      </MuiPickersUtilsProvider>
    </StyledFromDateToDateGrid>
  );
};

// value={selectedDate}
// InputAdornmentProps={{ position: "start" }}
// onChange={(date) => handleDateChange(date)}
