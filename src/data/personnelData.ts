// Lint not sorting keys in objects?!

interface Employee {
  firstName: string;
  internalNumber: string;
  lastName: string;
  departmentID: number;
  employeeSkills: {
    primaryID: number;
    secondaryID: number[];
  };
  // schedule: []
}

interface Department {
  employeeSkillsIDs: number[];
  name: string;
  peopleCount: number;
}

interface EmployeeSkill {
  peopleCount: {
    primary: number;
    secondary: number;
  };
  title: string;
}

const RobotOperator: EmployeeSkill = {
  peopleCount: {
    primary: 1,
    secondary: 2,
  },
  title: "Robot Operator",
};

const MachineOperator: EmployeeSkill = {
  peopleCount: {
    primary: 1,
    secondary: 2,
  },
  title: "Machine Operator",
};

const Developer: EmployeeSkill = {
  peopleCount: {
    primary: 1,
    secondary: 2,
  },
  title: "Developer",
};

const Manager: EmployeeSkill = {
  peopleCount: {
    primary: 1,
    secondary: 2,
  },
  title: "Manager",
};

const Management: Department = {
  employeeSkillsIDs: [3],
  name: "Management",
  peopleCount: 0,
};

const Machinery: Department = {
  employeeSkillsIDs: [0, 1, 2],
  name: "Machinery",
  peopleCount: 1,
};

const George: Employee = {
  departmentID: 1,
  employeeSkills: {
    primaryID: 2,
    secondaryID: [0, 1],
  },
  firstName: "George",
  internalNumber: "R00001",
  lastName: "Georgev",
};

export const EmployeeSkills: EmployeeSkill[] = [RobotOperator, MachineOperator, Developer, Manager];

export const Departments: Department[] = [Management, Machinery];

export const Personnel: Employee[] = [George];

export const FullDataPersonnel = Personnel.map(
  ({ departmentID, employeeSkills, internalNumber, firstName, lastName }) => ({
    departmentName: Departments[departmentID].name,
    employeeSkills: {
      primary: EmployeeSkills[employeeSkills.primaryID].title,
      secondary: employeeSkills.secondaryID.map((skillIndex) => EmployeeSkills[skillIndex].title),
    },
    firstName,
    internalNumber,
    lastName,
  })
);
