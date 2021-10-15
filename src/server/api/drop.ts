import { Types } from "mongoose";

import { DepartmentModel, EmployeeModel, EmployeeSkillModel } from "~/server";
import { Any, IDeleteReq } from "~/types";

export const drop: IDeleteReq = {
  department: async (id): Promise<Any> => {
    return await DepartmentModel.deleteOne({ _id: Types.ObjectId(id) });
  },
  employee: async (id): Promise<Any> => {
    return await EmployeeModel.deleteOne({ _id: Types.ObjectId(id) });
  },
  employeeSkill: async (id): Promise<Any> => {
    return await EmployeeSkillModel.deleteOne({ _id: Types.ObjectId(id) });
  },
};
