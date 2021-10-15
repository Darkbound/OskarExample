import { Types } from "mongoose";
import { useState } from "react";

import { setEmployees, useContext } from "~/context";
import { employeesRequests } from "~/data";
import { IEmployeeSkill } from "~/types";

import { DepartmentsRadioFilter, EmployeeSkillsCheckboxFilter } from "./";
import {
  FilterBackgroundPaper,
  FilterButton,
  StyledCollapse,
  StyledGrid,
  StyledPersonnelFilter,
} from "./elements";

export const PersonnelFilter: React.FC = ({ ...props }) => {
  const { state, dispatch } = useContext();
  const { departments, employeeSkills } = state;
  const [selectedDepartment, setSelectedDepartment] = useState<number>(-1);
  const [selectedEmployeeSkills, setSelectedEmployeeSkills] = useState<boolean[]>([]);
  const [employeeSkillsOptions, setEmployeeSkillsOptions] = useState<
    Pick<IEmployeeSkill, "_id" | "name" | "peopleCount">[]
  >([]);

  const onRadioClickSetSelectedDepartment = (department: number) => {
    setSelectedDepartment(department);

    //FIXME: Typescript...
    if (departments) {
      const departmentSkills = departments[department].employeeSkillIDs.map((id) => {
        const { _id, name, peopleCount } = employeeSkills.find(
          ({ _id }) => Types.ObjectId(id) === _id
        ) as IEmployeeSkill;
        return { _id, name, peopleCount };
      });
      setEmployeeSkillsOptions(departmentSkills);
    }
  };

  const onCheckboxClickSetSelectedEmployeeSkill = (employeeSkills: boolean[]) => {
    setSelectedEmployeeSkills(employeeSkills);
  };

  const selectedFilters = async () => {
    const departmentId = departments[selectedDepartment]._id;
    const employeeSkillsIds = employeeSkills
      .filter((val, index) => selectedEmployeeSkills[index])
      .map(({ _id }) => _id);

    const filter = {
      departmentId,
      employeeSkillsIds,
    };

    const filteredEmployees = await employeesRequests.get.byFilter({ filter });

    dispatch(setEmployees(filteredEmployees));
  };

  return (
    <StyledPersonnelFilter {...props}>
      <FilterBackgroundPaper square>
        <StyledCollapse headText="Departments">
          <DepartmentsRadioFilter
            items={departments}
            setFilteredItem={onRadioClickSetSelectedDepartment}
          />
        </StyledCollapse>
        {selectedDepartment > -1 && (
          <StyledCollapse headText="Employee Skills">
            <EmployeeSkillsCheckboxFilter
              items={employeeSkillsOptions}
              setFilteredItems={onCheckboxClickSetSelectedEmployeeSkill}
            />
          </StyledCollapse>
        )}
        <StyledGrid container item alignItems="center" direction="column">
          <FilterButton variant="contained" color="primary" onClick={selectedFilters}>
            FILTER
          </FilterButton>
        </StyledGrid>
      </FilterBackgroundPaper>
    </StyledPersonnelFilter>
  );
};
