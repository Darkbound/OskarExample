import { IDepartment, IEmployee, IEmployeeSkill } from "~/types";

export interface IGetReq {
  department: {
    all: () => Promise<IDepartment[]>;
    byId: (id: string) => Promise<IDepartment>;
  };
  employee: {
    all: () => Promise<IEmployee[]>;
    byId: (id: string) => Promise<IEmployee>;
    byIds: ({
      departmentId,
      employeeSkillsIds,
    }: {
      departmentId: string;
      employeeSkillsIds: string[];
    }) => Promise<IEmployee[]>;
  };
  employeeSkill: {
    all: () => Promise<IEmployeeSkill[]>;
    byId: (id: string) => Promise<IEmployeeSkill>;
    byIds: (ids: string[]) => Promise<IEmployeeSkill[]>;
  };
}
