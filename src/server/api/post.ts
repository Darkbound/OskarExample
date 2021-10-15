import { DepartmentModel, EmployeeModel, EmployeeSkillModel } from "~/server";
import { IDepartment, IEmployee, IEmployeeSkill, IPostReq } from "~/types";

export const post: IPostReq = {
  department: async (departmentInfo: IDepartment): Promise<void> => {
    // const initials = departmentInfo.name.substring(0, 4).toUpperCase();

    const newDepartment = new DepartmentModel({
      ...departmentInfo,
      // initials,
    });

    return await newDepartment.save();
  },
  employee: async (employeeInfo: IEmployee): Promise<void> => {
    const newEmployee = new EmployeeModel({
      ...employeeInfo,
    });

    return await newEmployee.save();
  },
  employeeSkill: async (employeeSkillInfo: IEmployeeSkill): Promise<void> => {
    const newEmployeeSkill = new EmployeeSkillModel({
      ...employeeSkillInfo,
    });

    return await newEmployeeSkill.save();
  },
};
