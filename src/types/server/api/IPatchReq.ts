import { UpdateWriteOpResult } from "mongoose";

import { Any } from "~/types";

export interface IPatchReq {
  department: (id: string, departmentPatchInfo: Any) => Promise<UpdateWriteOpResult>;
  employee: (id: string, employeePatchInfo: Any) => Promise<UpdateWriteOpResult>;
  employeeSkill: (id: string, employeeSkillPatchInfo: Any) => Promise<UpdateWriteOpResult>;
}
