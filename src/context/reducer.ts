import { Action, State } from "~/types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.payload };

    case "LOGOUT_USER":
      return { ...state, user: null };

    case "DRAWERMENU_OPEN":
      return { ...state, drawerOpened: true };

    case "DRAWERMENU_CLOSE":
      return { ...state, drawerOpened: false };

    case "UPDATE_OPENED_FORM_DIALOGS_LIST":
      return {
        ...state,
        openedDialogs: {
          ...state.openedDialogs,
          list: handleUpdatingOpenedFormDialogsList(state, action.payload),
        },
      };

    case "SET_DEPARTMENTS":
      return {
        ...state,
        departments: action.payload,
      };

    case "SET_EMPLOYEES":
      return {
        ...state,
        employees: action.payload,
      };

    case "SET_EMPLOYEE_SKILLS":
      return {
        ...state,
        employeeSkills: action.payload,
      };

    case "UPDATE_DEPARTMENTS":
      return {
        ...state,
        departments: [...state.departments, action.payload],
      };

    case "TOGGLE_DIALOG_ADD_DEPARTMENT":
      return {
        ...state,
        openedDialogs: {
          ...state.openedDialogs,
          addDepartment: !state.openedDialogs.addDepartment,
        },
      };

    case "TOGGLE_DIALOG_ADD_EMPLOYEE":
      return {
        ...state,
        openedDialogs: {
          ...state.openedDialogs,
          addEmployee: !state.openedDialogs.addEmployee,
        },
      };

    case "TOGGLE_DIALOG_ADD_EMPLOYEE_SKILL":
      return {
        ...state,
        openedDialogs: {
          ...state.openedDialogs,
          addEmployeeSkill: !state.openedDialogs.addEmployeeSkill,
        },
      };

    case "TOGGLE_DIALOG_DELETE_DEPARTMENT":
      return {
        ...state,
        openedDialogs: {
          ...state.openedDialogs,
          deleteDepartment: !state.openedDialogs.deleteDepartment,
        },
      };

    case "TOGGLE_DIALOG_DELETE_EMPLOYEE":
      return {
        ...state,
        openedDialogs: {
          ...state.openedDialogs,
          deleteEmployee: !state.openedDialogs.deleteEmployee,
        },
      };

    case "TOGGLE_DIALOG_DELETE_EMPLOYEE_SKILL":
      return {
        ...state,
        openedDialogs: {
          ...state.openedDialogs,
          deleteEmployeeSkill: !state.openedDialogs.deleteEmployeeSkill,
        },
      };

    case "TOGGLE_DIALOG_EDIT_DEPARTMENT":
      return {
        ...state,
        openedDialogs: {
          ...state.openedDialogs,
          editDepartment: !state.openedDialogs.editDepartment,
        },
      };

    case "TOGGLE_DIALOG_EDIT_EMPLOYEE":
      return {
        ...state,
        openedDialogs: {
          ...state.openedDialogs,
          editEmployee: !state.openedDialogs.editEmployee,
        },
      };

    case "TOGGLE_DIALOG_EDIT_EMPLOYEE_SKILL":
      return {
        ...state,
        openedDialogs: {
          ...state.openedDialogs,
          editEmployeeSkill: !state.openedDialogs.editEmployeeSkill,
        },
      };

    case "UPDATE_EMPLOYEES":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case "UPDATE_EMPLOYEE_SKILLS":
      return {
        ...state,
        employeeSkills: [...state.employeeSkills, action.payload],
      };

    default:
      return state;
  }
};

const handleUpdatingOpenedFormDialogsList = (
  state: State,
  payload: { dialogName: string; newState: boolean }
): string[] => {
  const { dialogName, newState } = payload;
  const {
    openedDialogs: { list },
  } = state;
  let updatedList: string[] = [...list];

  if (newState) {
    updatedList.push(dialogName);
  } else {
    updatedList = list.filter((openedDialog) => openedDialog !== dialogName);
  }

  return updatedList;
};

// const handleGetAllDepartments = (extraParams = {}) => {
//   const { state } = useContext();

//   const { axiosInstance } = state;

//   const getDepartmentsUrl = "/departments";
//   const retrievedDepartments = await axiosInstance.get(getDepartmentsUrl, extraParams);

//   return retrievedDepartments;
// };
