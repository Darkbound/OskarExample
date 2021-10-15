import { Types } from "mongoose";

import { IEmployee, IEmployeeInput } from "~/types";
import { axios } from "~/utils";

const getAllEmployees = async (): Promise<IEmployee[]> => {
  const employees = await axios.get("/employees");

  return employees.data;
};

const getEmployeeById = async ({ id }: { id: string }): Promise<IEmployee> => {
  const employee = await axios.get(`/employees/${id}`);

  return employee.data;
};

const getEmployeesByFilter = async ({
  filter,
}: {
  filter: { departmentId: Types.ObjectId; employeeSkillsIds: Types.ObjectId[] };
}): Promise<IEmployee[]> => {
  const filteredEmployees = await axios.get(`/employees/multiple`, { params: filter });

  return filteredEmployees.data;
};

const createEmployee = async ({
  employeeInfo,
}: {
  employeeInfo: IEmployeeInput;
}): Promise<IEmployee> => {
  const newEmployee = await axios.post(`/employees`, employeeInfo);

  return newEmployee.data;
};

export const employeesRequests = {
  get: {
    all: getAllEmployees,
    byFilter: getEmployeesByFilter,
    byId: getEmployeeById,
  },
  post: createEmployee,
};
