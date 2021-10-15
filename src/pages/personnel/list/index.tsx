import { NextPage } from "next";
import { useEffect } from "react";

import {
  AddDepartmentDialog,
  AddEmployeeDialog,
  AddEmployeeSkillDialog,
  EditDepartmentDialog,
  EditEmployeeDialog,
  EditEmployeeSkillDialog,
  PersonnelControls,
  PersonnelFilter,
  PersonnelListTable,
} from "~/collections";
import { Grid } from "~/components";
import { setDepartments, setEmployees, setEmployeeSkills, useContext } from "~/context";
import { departmentsRequests, employeeSkillsRequests, employeesRequests } from "~/data";

const PersonnelList: NextPage = () => {
  const { dispatch, state } = useContext();
  const { employees } = state;

  useEffect(() => {
    const checkForMissingData = (): boolean => {
      return employees.length === 0;
    };

    const loadInitialData = async () => {
      try {
        const employees = await employeesRequests.get.all();
        const departments = await departmentsRequests.get.all();
        const employeeSkills = await employeeSkillsRequests.get.all();

        dispatch(setDepartments(departments || []));
        dispatch(setEmployees(employees || []));
        dispatch(setEmployeeSkills(employeeSkills || []));
      } catch (e) {}
    };

    checkForMissingData() && loadInitialData();
  }, []);

  return (
    <Grid container direction="row" item xs={12}>
      <AddDepartmentDialog />
      <AddEmployeeDialog />
      <AddEmployeeSkillDialog />
      <EditDepartmentDialog />
      <EditEmployeeDialog />
      <EditEmployeeSkillDialog />
      <Grid container item direction="column" xs={2}>
        <PersonnelFilter />
      </Grid>
      <Grid container item direction="column" xs={10}>
        <Grid container item direction="row">
          <PersonnelControls />
        </Grid>
        <Grid item>
          <PersonnelListTable />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonnelList;
