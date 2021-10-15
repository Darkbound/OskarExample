import { Types } from "mongoose";

export interface IDepartmentInput {
  name: string;
  employeeSkillIDs?: string[];
}

export interface IDepartment extends Required<IDepartmentInput> {
  _id: Types.ObjectId;
  createdAt: number;
  updatedAt: number;
  initials?: string;
  peopleCount: number;
}
