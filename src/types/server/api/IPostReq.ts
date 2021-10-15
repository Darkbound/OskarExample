import { IDepartment, IEmployee, IEmployeeSkill } from "~/types";

export interface IPostReq {
  department: (departmentInfo: IDepartment) => Promise<void>;
  employee: (employeeInfo: IEmployee) => Promise<void>;
  employeeSkill: (employeeSkillInfo: IEmployeeSkill) => Promise<void>;
}
