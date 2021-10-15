import { Types } from "mongoose";

export interface IEmployeeInput {
  departmentId?: string;
  skills?: {
    primaryID: string;
    secondaryIDs: string[];
  };
  egn: string;
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface IEmployee extends IEmployeeInput {
  _id: Types.ObjectId;
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
  schedule: number;
}
