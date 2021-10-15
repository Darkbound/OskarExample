import { Types, UpdateWriteOpResult } from "mongoose";

import { IEmployeeSkill, IEmployeeSkillInput } from "~/types";
import { axios } from "~/utils";

const getAll = async (): Promise<IEmployeeSkill[]> => {
  const employeeSkills = await axios.get("/employeeSkills");

  return employeeSkills.data;
};

const getById = async ({ id }: { id: string }): Promise<IEmployeeSkill> => {
  const employeeSkill = await axios.get(`/employeeSkills/${id}`);

  return employeeSkill.data;
};

const getByIds = async ({
  employeeSkillsIDs,
}: {
  employeeSkillsIDs: string[];
}): Promise<IEmployeeSkill[]> => {
  const employeeSkills = await axios.get(
    `/employeeSkills/multiple/${JSON.stringify(employeeSkillsIDs)}`
  );
  return employeeSkills.data;
};

const create = async ({
  employeeSkillInfo,
}: {
  employeeSkillInfo: IEmployeeSkillInput;
}): Promise<IEmployeeSkill> => {
  const result = await axios.post(`/employeeSkills`, employeeSkillInfo);

  return result.data;
};

const partialUpdate = async (
  id: Types.ObjectId,
  { employeeSkillInfo }: { employeeSkillInfo: Pick<IEmployeeSkill, "name" | "departmentIDs"> }
): Promise<UpdateWriteOpResult> => {
  const partiallyUpdatedEmployeeSkill = await axios.patch(
    `/employeeSkills/${id}`,
    employeeSkillInfo
  );

  return partiallyUpdatedEmployeeSkill.data;
};

export const employeeSkillsRequests = {
  get: {
    all: getAll,
    byId: getById,
    byIds: getByIds,
  },
  patch: partialUpdate,
  post: create,
};
