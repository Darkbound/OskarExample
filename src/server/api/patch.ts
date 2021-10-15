import { Types } from "mongoose";

import { DepartmentModel, EmployeeModel, EmployeeSkillModel } from "~/server";
import { IPatchReq } from "~/types";

export const patch: IPatchReq = {
  department: async (id, departmentPatchInfo) => {
    return await DepartmentModel.updateOne({ _id: Types.ObjectId(id) }, departmentPatchInfo);
  },
  employee: async (id, employeeInfo) => {
    return await EmployeeModel.updateOne({ _id: Types.ObjectId(id) }, employeeInfo);
  },
  employeeSkill: async (id, employeeSkillInfo) => {
    return await EmployeeSkillModel.updateOne({ _id: Types.ObjectId(id) }, employeeSkillInfo);
  },
};
