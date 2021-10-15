import { HookNextFunction, model, models, Schema } from "mongoose";

import { IDepartment } from "~/types";

const defaultEmptyMongoIDArrayOpts = {
  default: [],
  length: 24,
  required: true,
  type: String,
};

const createdAndUpdatedAtMongooseDefault = {
  createdAt: {
    default: Date.now(),
    type: Date,
  },
  updatedAt: {
    default: Date.now(),
    type: Date,
  },
};

const schema = new Schema<Required<IDepartment>>({
  ...createdAndUpdatedAtMongooseDefault,
  employeeSkillIDs: [{ ...defaultEmptyMongoIDArrayOpts }],
  employeesIDs: [{ ...defaultEmptyMongoIDArrayOpts }],
  initials: { length: 4, type: String, unique: true },
  name: { maxlength: 20, minlength: 4, required: true, type: String, unique: true },
  peopleCount: { default: 0, max: 99999, min: 0, required: true, type: Number },
});

schema.pre<IDepartment>("save", function (next: HookNextFunction) {
  this.initials = this.name.substring(0, 4).toUpperCase();

  next();
});

schema.pre("updateOne", function (next) {
  this.set({ updatedAt: Date.now() }); // FIXME: why the bellow doesnt work?
  // this.updatedAt = Date.now();

  next();
});

schema.post("updateOne", function () {
  if (this?._update?.employeeSkillIDs) {
  } // remove department id from the skill
});

// schema.post<IDepartment>("updateOne", { document: true, query: false }, function (res) {

// });

// schema.pre<IDepartment>("updateOne", function (next: HookNextFunction) {
//   console.log("pre update department");
//   console.log(this);
//   next();
// });

// schema.post("updateOne", function (this: IDepartment, next: HookNextFunction) {
//   console.log("post update department");
//   this.peopleCount;
//   next();
// });

export const DepartmentModel = models.Department || model<IDepartment>("Department", schema);

// When department is created
