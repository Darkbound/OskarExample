import { model, models, Schema } from "mongoose";

import { IEmployeeSkill } from "~/types";

//TODO: Not complaining about not complying to interface?!
const schema = new Schema<Required<IEmployeeSkill>>({
  departmentIDs: [
    {
      length: 24,
      type: String,
    },
  ],
  name: {
    maxlength: 30,
    minlength: 3,
    required: true,
    type: String,
    unique: true,
  },
  peopleCount: {
    primary: {
      default: 0,
      max: 10000,
      min: 0,
      required: true,
      type: Number,
    },
    secondary: {
      default: 0,
      max: 10000,
      min: 0,
      required: true,
      type: Number,
    },
  },
});

export const EmployeeSkillModel =
  models.EmployeeSkill || model<IEmployeeSkill>("EmployeeSkill", schema);
