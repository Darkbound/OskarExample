import { UpdateResult } from "mongodb";
import { Types } from "mongoose";

import { IDepartment, IDepartmentInput } from "~/types";
import { axios } from "~/utils";

const getAll = async (): Promise<IDepartment[]> => {
  const departments = await axios.get("/departments");

  //TODO: Handle different codes and errors here
  return departments.data;
};

const getById = async ({ id }: { id: string }): Promise<IDepartment> => {
  const department = await axios.get(`/departments/${id}`);

  return department.data;
};

const create = async ({
  departmentInfo,
}: {
  departmentInfo: IDepartmentInput;
}): Promise<IDepartment> => {
  const newDepartment = await axios.post(`/departments`, departmentInfo);

  return newDepartment.data;
};

const partialUpdate = async (
  id: Types.ObjectId,
  { departmentInfo }: { departmentInfo: IDepartmentInput }
): Promise<UpdateResult> => {
  const partiallyUpdatedDepartment = await axios.patch(`/departments/${id}`, departmentInfo);

  return partiallyUpdatedDepartment.data;
};

export const departmentsRequests = {
  get: {
    all: getAll,
    byId: getById,
  },
  patch: partialUpdate,
  post: create,
};

// TODO: FIX AXIOS
