import { Dispatch } from "react";

import { Any } from "~/types";
import { IDepartment, IEmployee, IEmployeeSkill } from "~/types";

export type User = string | null;

export interface State {
  openedDialogs: {
    list: string[];
    addDepartment: boolean;
    addEmployee: boolean;
    addEmployeeSkill: boolean;
    deleteDepartment: boolean;
    deleteEmployee: boolean;
    deleteEmployeeSkill: boolean;
    editDepartment: boolean;
    editEmployee: boolean;
    editEmployeeSkill: boolean;
  };
  user: User;
  drawerOpened: boolean;
  employees: IEmployee[];
  employeeSkills: IEmployeeSkill[];
  departments: IDepartment[];
}

export type ActionType =
  | "DRAWERMENU_OPEN"
  | "DRAWERMENU_CLOSE"
  | "LOGIN_USER"
  | "LOGOUT_USER"
  | "SIGNUP_USER"
  | "TOGGLE_DIALOG_ADD_DEPARTMENT"
  | "TOGGLE_DIALOG_ADD_EMPLOYEE"
  | "TOGGLE_DIALOG_ADD_EMPLOYEE_SKILL"
  | "TOGGLE_DIALOG_DELETE_DEPARTMENT"
  | "TOGGLE_DIALOG_DELETE_EMPLOYEE"
  | "TOGGLE_DIALOG_DELETE_EMPLOYEE_SKILL"
  | "TOGGLE_DIALOG_EDIT_DEPARTMENT"
  | "TOGGLE_DIALOG_EDIT_EMPLOYEE"
  | "TOGGLE_DIALOG_EDIT_EMPLOYEE_SKILL"
  | "UPDATE_OPENED_FORM_DIALOGS_LIST"
  | "SET_DEPARTMENTS"
  | "SET_EMPLOYEE_SKILLS"
  | "SET_EMPLOYEES"
  | "UPDATE_DEPARTMENTS"
  | "UPDATE_EMPLOYEES"
  | "UPDATE_EMPLOYEE_SKILLS";

export interface Action {
  type: ActionType;
  payload?: Any;
}

export interface ContextValues {
  dispatch: Dispatch<Action>;
  state: State;
}
