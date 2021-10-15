import { Types } from "mongoose";
export interface IEmployeeSkillInput {
  name: string;
  departmentIDs?: Types.ObjectId[];
}

export interface IEmployeeSkill extends IEmployeeSkillInput {
  _id: Types.ObjectId;
  peopleCount: {
    primary: number;
    secondary: number;
  };
}
