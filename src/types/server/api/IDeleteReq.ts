import { Any } from "~/types";

export interface IDeleteReq {
  department: (id: string) => Promise<Any>;
  employee: (id: string) => Promise<Any>;
  employeeSkill: (id: string) => Promise<Any>;
}
