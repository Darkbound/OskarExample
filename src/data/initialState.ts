import { State } from "~/types";

export const initialState: State = {
  departments: [],
  drawerOpened: false,
  employeeSkills: [],
  employees: [],
  openedDialogs: {
    addDepartment: false,
    addEmployee: false,
    addEmployeeSkill: false,
    deleteDepartment: false,
    deleteEmployee: false,
    deleteEmployeeSkill: false,
    editDepartment: false,
    editEmployee: false,
    editEmployeeSkill: false,

    list: [], //TODO: Remove list
  },
  user: null,
};
