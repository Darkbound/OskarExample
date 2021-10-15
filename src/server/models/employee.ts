import { HookNextFunction, model, models, Schema } from "mongoose";

import { IEmployee } from "~/types";
import { generateEmpty3dShiftsArray } from "~/utils";

// import { DepartmentModel } from "./department";
// import { EmployeeSkillModel } from "./employeeSkill";

const shifts = ["X", "Р", "I", "II", "Н", "П", "НО", "ПО", "Б"];
const defaultDepartmentId = "xxxxxxxxxxxxxxxxxxxxxxxx";

const schema = new Schema<Required<IEmployee>>({
  createdAt: {
    default: Date.now(),
    required: true,
    type: Date,
  },
  departmentId: {
    default: defaultDepartmentId,
    length: 24,
    required: true,
    type: String,
  },
  egn: {
    length: 10,
    required: true,
    type: String,
    unique: true,
  },
  firstName: {
    maxLength: 20,
    minLength: 2,
    required: true,
    type: String,
  },
  fullName: {
    type: String,
  },
  lastName: {
    maxLength: 20,
    minLength: 2,
    required: true,
    type: String,
  },
  middleName: {
    maxLength: 20,
    minLength: 2,
    required: true,
    type: String,
  },

  // default is from Jan 1, 2021, until today + next month
  // shift is X
  schedule: {
    default: generateEmpty3dShiftsArray(),
    type: [
      [
        [
          {
            shift: { enum: shifts, required: true, type: String },
          },
        ],
      ],
    ],
  },
  skills: {
    primaryID: {
      length: 24,
      required: true,
      type: String,
    },

    secondaryIDs: {
      default: [],
      type: [
        {
          length: 24,
          required: true,
          type: String,
        },
      ],
    },
  },
  updatedAt: {
    default: Date.now(),
    required: true,
    type: Date,
  },
});

schema.pre<IEmployee>("save", async function (next: HookNextFunction) {
  this.fullName = `${this.firstName} ${this.middleName} ${this.lastName}`;

  next();
});

// schema.methods.methodName = () => {
//   return true;
// };

// schema.virtual("virtualField").get(function (this: IEmployee) {
//   return `${this.firstName}`;
// });

// const updateDepartmentPeopleCounter = async (departmentId: Types.ObjectId) => {
//   const updatedDepartment = await DepartmentModel.updateOne(
//     { _id: departmentId },
//     { $inc: { peopleCount: 1 } }
//   );

//   return updatedDepartment;
// };

// const updateEmployeeSkillsPeopleCount = async ({
//   primaryID,
//   secondaryIDs,
// }: {
//   primaryID: Types.ObjectId;
//   secondaryIDs: Types.ObjectId[];
// }) => {
//   const updatedPrimaryCounts = await EmployeeSkillModel.updateOne(
//     { _id: primaryID },
//     { $inc: { "peopleCount.primary": 1 } }
//   );

//   const updatedSecondaryCounts = await EmployeeSkillModel.updateMany(
//     { _id: { $in: secondaryIDs } },
//     { $inc: { "peopleCount.secondary": 1 } }
//   );

//   return { updatedPrimaryCounts, updatedSecondaryCounts };
// };

schema.pre("save", async function (next: HookNextFunction) {
  // const { departmentId, skills } = this;

  // const updateDepartmentPeopleCountResult = await updateDepartmentPeopleCounter(departmentId);
  // const updateEmployeeSkillsPeopleCountResult = await updateEmployeeSkillsPeopleCount(skills);

  next();
});

schema.pre<IEmployee>(
  "updateOne",
  { document: true, query: false },
  function (next: HookNextFunction) {
    this.updatedAt = new Date();

    next();
  }
);

export const EmployeeModel = models.Employee || model<IEmployee>("Employee", schema);

// When employee is added or removed to/from a department => update department people count
// When employee skills are changed => update employeeSkills counters
