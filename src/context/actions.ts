import { Action, IDepartment, IEmployee, IEmployeeSkill, User } from "~/types";

export const loginUser = (user: User): Action => ({
  payload: user,
  type: "LOGIN_USER",
});

export const logoutUser = (): Action => ({
  type: "LOGOUT_USER",
});

export const drawerOpen = (): Action => ({
  type: "DRAWERMENU_OPEN",
});

export const drawerClose = (): Action => ({
  type: "DRAWERMENU_CLOSE",
});

export const toggleAddDepartmentDialog = (): Action => ({
  type: "TOGGLE_DIALOG_ADD_DEPARTMENT",
});

export const toggleAddEmployeeDialog = (): Action => ({
  type: "TOGGLE_DIALOG_ADD_EMPLOYEE",
});

export const toggleAddEmployeeSkillDialog = (): Action => ({
  type: "TOGGLE_DIALOG_ADD_EMPLOYEE_SKILL",
});

export const toggleDeleteDepartmentDialog = (): Action => ({
  type: "TOGGLE_DIALOG_DELETE_DEPARTMENT",
});

export const toggleDeleteEmployeeDialog = (): Action => ({
  type: "TOGGLE_DIALOG_DELETE_EMPLOYEE",
});

export const toggleDeleteEmployeeSkillDialog = (): Action => ({
  type: "TOGGLE_DIALOG_DELETE_EMPLOYEE_SKILL",
});

export const toggleEditDepartmentDialog = (): Action => ({
  type: "TOGGLE_DIALOG_EDIT_DEPARTMENT",
});

export const toggleEditEmployeeDialog = (): Action => ({
  type: "TOGGLE_DIALOG_EDIT_EMPLOYEE",
});

export const toggleEditEmployeeSkillDialog = (): Action => ({
  type: "TOGGLE_DIALOG_EDIT_EMPLOYEE_SKILL",
});

export const updateOpenedDialogsList = (toggledDialog: {
  dialogName: string;
  newState: boolean;
}): Action => ({
  payload: toggledDialog,
  type: "UPDATE_OPENED_FORM_DIALOGS_LIST",
});

export const setDepartments = (departments: IDepartment[]): Action => ({
  payload: departments,
  type: "SET_DEPARTMENTS",
});

export const updateDepartments = (newDepartments: IDepartment): Action => ({
  payload: newDepartments,
  type: "UPDATE_DEPARTMENTS",
});

export const updateEmployees = (newEmployee: IEmployee): Action => ({
  payload: newEmployee,
  type: "UPDATE_EMPLOYEES",
});

export const updateEmployeeSkills = (newEmployeeSkill: IEmployeeSkill): Action => ({
  payload: newEmployeeSkill,
  type: "UPDATE_EMPLOYEE_SKILLS",
});

export const setEmployees = (employees: IEmployee[]): Action => ({
  payload: employees,
  type: "SET_EMPLOYEES",
});

export const setEmployeeSkills = (employeeSkills: IEmployeeSkill[]): Action => ({
  payload: employeeSkills,
  type: "SET_EMPLOYEE_SKILLS",
});
