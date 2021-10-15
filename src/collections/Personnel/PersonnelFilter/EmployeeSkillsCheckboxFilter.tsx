import { useEffect, useState } from "react";

import { Any, CheckboxFilterProps } from "~/types";

import { EmployeeSkillCheckbox, StyledFormControl, StyledFormControlLabel } from "./elements";

export const EmployeeSkillsCheckboxFilter: React.FC<CheckboxFilterProps> = ({
  items: employeeSkills,
  setFilteredItems,
  ...props
}) => {
  const [checkedEmployeeSkills, setCheckedEmployeeSkills] = useState<boolean[]>([]);

  useEffect(() => {
    setFilteredItems(checkedEmployeeSkills);
  }, [checkedEmployeeSkills]);

  const handleOnCheckboxCheck = (e: Any) => {
    const index: number = e.target.value;
    const state: boolean = e.target.checked;

    setCheckedEmployeeSkills((prevCheckedEmployeeSkills) => {
      const prevCheckedEmployeeSkillsCopy: boolean[] = [...prevCheckedEmployeeSkills];
      prevCheckedEmployeeSkillsCopy[index] = state;

      return prevCheckedEmployeeSkillsCopy;
    });
  };

  return (
    <StyledFormControl {...props}>
      {employeeSkills.map(({ name, peopleCount }, index) => (
        <StyledFormControlLabel
          key={`${name}${index}${peopleCount.primary + peopleCount.secondary}`}
          label={`${name} - ${peopleCount.primary} (${peopleCount.secondary})`}
          control={<EmployeeSkillCheckbox value={index} onChange={handleOnCheckboxCheck} />}
        />
      ))}
    </StyledFormControl>
  );
};
