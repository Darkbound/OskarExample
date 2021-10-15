import { Types } from "mongoose";

import { DepartmentModel, EmployeeModel, EmployeeSkillModel } from "~/server";
import { IDepartment, IEmployee, IEmployeeSkill, IGetReq } from "~/types";

export const get: IGetReq = {
  department: {
    all: async (): Promise<IDepartment[]> => {
      return await DepartmentModel.find();
    },

    byId: async (id): Promise<IDepartment> => {
      return await DepartmentModel.findById(Types.ObjectId(id));
    },
  },
  employee: {
    all: async (): Promise<IEmployee[]> => {
      return await EmployeeModel.find();
    },

    byId: async (id): Promise<IEmployee> => {
      return await EmployeeModel.findById(Types.ObjectId(id));
    },

    byIds: async ({ departmentId, employeeSkillsIds }): Promise<IEmployee[]> => {
      return await EmployeeModel.find({
        departmentId,
        "skills.primaryID": { $in: employeeSkillsIds },
      });
    },
  },
  employeeSkill: {
    all: async (): Promise<IEmployeeSkill[]> => {
      return await EmployeeSkillModel.find();
    },

    byId: async (id): Promise<IEmployeeSkill> => {
      return await EmployeeSkillModel.findById(Types.ObjectId(id));
    },

    byIds: async (ids): Promise<IEmployeeSkill[]> => {
      const adaptedIDs = ids.map((id) => Types.ObjectId(id));

      return await EmployeeSkillModel.find({ _id: { $in: adaptedIDs } });
    },
  },
};
