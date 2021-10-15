import { Types } from "mongoose";

import { DepartmentModel, EmployeeModel, EmployeeSkillModel } from "~/server";
import { IDepartment, IEmployee, IEmployeeSkill, IPutReq } from "~/types";

export const put: IPutReq = {
  department: async (id: string, newDepartmentInfo: IDepartment): Promise<void> => {
    return await DepartmentModel.replaceOne(
      { _id: Types.ObjectId(id) },
      { ...newDepartmentInfo },
      { new: true, upsert: true }
    );
  },
  employee: async (id: string, newEmployeeInfo: IEmployee): Promise<void> => {
    return await EmployeeModel.replaceOne(
      { _id: Types.ObjectId(id) },
      { ...newEmployeeInfo },
      { new: true, upsert: true }
    );
  },
  employeeSkill: async (id: string, newEmployeeSkillInfo: IEmployeeSkill): Promise<void> => {
    return await EmployeeSkillModel.replaceOne(
      { _id: Types.ObjectId(id) },
      { ...newEmployeeSkillInfo },
      { new: true, upsert: true }
    );
  },
};
