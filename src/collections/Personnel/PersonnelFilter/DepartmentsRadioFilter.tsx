import { useState } from "react";

import { Any, RadioFilterProps } from "~/types";

import {
  DepartmentRadio,
  DepartmentsRadioGroup,
  StyledFormControl,
  StyledFormControlLabel,
} from "./elements";

export const DepartmentsRadioFilter: React.FC<RadioFilterProps> = ({
  items: departments,
  setFilteredItem,
  ...props
}) => {
  const [value, setValue] = useState(false);

  const handleRadioSelectionChange = (e: Any) => {
    setValue(e.target.value);
    setFilteredItem(e.target.value as number);
  };

  return (
    <StyledFormControl {...props}>
      <DepartmentsRadioGroup value={value} onChange={handleRadioSelectionChange}>
        {departments.length > 0 &&
          departments.map(({ name, peopleCount }, index) => (
            <StyledFormControlLabel
              value={index.toString()}
              key={`${name}${peopleCount}${index}`}
              label={`${name} - ${peopleCount}`}
              control={<DepartmentRadio />}
            />
          ))}
      </DepartmentsRadioGroup>
    </StyledFormControl>
  );
};
