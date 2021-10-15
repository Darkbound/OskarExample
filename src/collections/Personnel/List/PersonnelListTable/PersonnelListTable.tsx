import { Types } from "mongoose";

import { CollapsedRowHeadPerson, CollapsedRowItemPerson } from "~/collections";
import { useContext } from "~/context";

import { StyledCollapsibleTable, StyledContainer } from "./elements";

export const PersonnelListTable: React.FC = ({ ...props }) => {
  const { state } = useContext();
  const { employees, departments, employeeSkills } = state;

  //FIXME: EMPLOYEE SCHEDULE IS 13 MONTHS

  const adaptedEmployees = employees.map((employee) => ({
    createdAt: employee.createdAt,
    department: departments.find(
      // TODO What to do if there is no department ID
      ({ _id }) => _id === Types.ObjectId(employee.departmentId!)
    )?.name, // FIXME: if converted to unknown and string it dosent work!
    fullName: employee.fullName,
    primarySkill: employeeSkills.find(
      ({ _id }) => _id === Types.ObjectId(employee.skills!.primaryID!)
    )?.name,
    schedule: employee.schedule,
    secondarySkills: employee.skills?.secondaryIDs
      .map((id) => employeeSkills.find(({ _id }) => id === (_id as string))?.name)
      .join(", "),
  }));

  return (
    <StyledContainer {...props}>
      <StyledCollapsibleTable
        headerTitles={["", "Internal Number", "Name", "Main Skill"]}
        items={adaptedEmployees}
        HeadComponent={CollapsedRowHeadPerson}
        ItemComponent={CollapsedRowItemPerson}
      />
    </StyledContainer>
  );
};
