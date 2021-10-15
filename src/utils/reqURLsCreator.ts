export const DepartmentsUrls = {
  getAllDepartments: (): string => {
    return `/departments`;
  },
  getDepartmentById: (id: string): string => {
    return `/departments/${id}`;
  },
  patchDepartment: (id: string): string => {
    return `/department/${id}`;
  },
  postDepartment: (): string => {
    return `/departments`;
  },
  putDepartment: (id: string): string => {
    return `/department/${id}`;
  },
};
