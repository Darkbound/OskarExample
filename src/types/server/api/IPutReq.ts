import { IDepartment, IEmployee, IEmployeeSkill } from "~/types";
export interface IPutReq {
  department: (id: string, departmentUpdateInfo: IDepartment) => Promise<void>;
  employee: (id: string, employeeUpdateInfo: IEmployee) => Promise<void>;
  employeeSkill: (id: string, employeeSkillUpdateInfo: IEmployeeSkill) => Promise<void>;
}
