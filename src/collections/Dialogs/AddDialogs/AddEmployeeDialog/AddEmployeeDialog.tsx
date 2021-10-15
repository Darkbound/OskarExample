import { FormikHelpers, useFormik } from "formik";
import { Types } from "mongoose";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import {
  toggleAddDepartmentDialog,
  toggleAddEmployeeDialog,
  toggleAddEmployeeSkillDialog,
  updateEmployees,
  useContext,
} from "~/context";
import { employeeSkillsRequests, employeesRequests } from "~/data";
import {
  AddEmployeeDialogProps,
  Any,
  AutocompleteOption,
  IDepartment,
  IEmployeeInput,
  IEmployeeSkill,
} from "~/types";
import { yupTest } from "~/utils";

import { StyledAddEmployeeDialog, StyledAutocomplete, StyledFormikTextField } from "./elements";

const fieldsLimits = {
  firstName: {
    maxLength: 20,
    minLength: 2,
  },
  lastName: {
    maxLength: 20,
    minLength: 2,
  },
  middleName: {
    maxLength: 20,
    minLength: 2,
  },
  skillsPrimaryID: {
    length: 24,
  },
  skillsSecondaryIDs: {
    length: 24,
  },
};

//FIXME: yupValidationMessage IS UNDEFINED WHAT THE FUCK

const addEmployeeFormValidationSchema = Yup.object({
  departmentID: Yup.string().length(24),
  egn: Yup.string().required("* Required").length(10),
  firstName: Yup.string()
    .required("* Required")
    .test(
      "len",
      `Must be between ${fieldsLimits.firstName.minLength} and ${fieldsLimits.firstName.maxLength} characters`,
      (value) =>
        yupTest.stringLength(
          value,
          fieldsLimits.firstName.minLength,
          fieldsLimits.firstName.maxLength
        )
    ),
  lastName: Yup.string()
    .required("* Required")
    .test(
      "len",
      `Must be between ${fieldsLimits.firstName.minLength} and ${fieldsLimits.firstName.maxLength} characters`,
      (value) =>
        yupTest.stringLength(
          value,
          fieldsLimits.firstName.minLength,
          fieldsLimits.firstName.maxLength
        )
    ),
  middleName: Yup.string()
    .required("* Required")
    .test(
      "len",
      `Must be between ${fieldsLimits.firstName.minLength} and ${fieldsLimits.firstName.maxLength} characters`,
      (value) =>
        yupTest.stringLength(
          value,
          fieldsLimits.firstName.minLength,
          fieldsLimits.firstName.maxLength
        )
    ),
  skills: Yup.object().shape({
    primaryID: Yup.string(),
    secondaryIDs: Yup.array().of(Yup.string().length(fieldsLimits.skillsSecondaryIDs.length)),
  }),
});

const addEmployeeFormInitialValues: IEmployeeInput = {
  departmentId: "",
  egn: "",
  firstName: "",
  lastName: "",
  middleName: "",
  skills: {
    primaryID: "",
    secondaryIDs: [],
  },
};

const addEmployeeFormId = "addEmployeeForm";

//TODO: Do I query employeeSkills (and whatever) independently everywhere, so that there is no employeeSkills (or whatever items) global state
export const AddEmployeeDialog: React.FC<AddEmployeeDialogProps> = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const [employeeSkills, setEmployeeSkills] = useState<IEmployeeSkill[]>([]);
  const [departmentSelected, setDepartmentSelected] = useState<IDepartment | undefined>();
  const [primarySkillSelected, setPrimarySkillSelected] = useState<IEmployeeSkill>();
  const { dispatch, state } = useContext();
  const { departments } = state;
  const { addDepartment, addEmployee, addEmployeeSkill } = state.openedDialogs;

  // FIXME: Typescript..
  const handleAddEmployee = async (
    employeeInfo: IEmployeeInput,
    { resetForm }: FormikHelpers<IEmployeeInput>
  ) => {
    try {
      setLoading(true);

      const newEmployee = await employeesRequests.post({ employeeInfo });

      dispatch(updateEmployees(newEmployee));
      dispatch(toggleAddEmployeeDialog());
      setLoading(false);
      resetForm();
    } catch (e) {
      setLoading(false);
      // TODO: Display error?
    }
  };

  const formik = useFormik({
    initialValues: addEmployeeFormInitialValues,
    onSubmit: handleAddEmployee,
    validateOnChange: true,
    validationSchema: addEmployeeFormValidationSchema,
  });

  useEffect(() => {
    const getEmployeeSkills = async () => {
      const employeeSkills = await employeeSkillsRequests.get.all();
      setEmployeeSkills(employeeSkills);
    };

    getEmployeeSkills();
  }, []);

  const handleSelectDepartmentOnChange = (
    _event: React.ChangeEvent<Record<Any, Any>>,
    value: AutocompleteOption | AutocompleteOption[]
  ) => {
    setDepartmentSelected(
      departments.find(({ _id }) => _id.toString() === (value as AutocompleteOption).value)
    );
  };

  const handlePrimarySkillOnChange = (
    _event: React.ChangeEvent<Record<Any, Any>>,
    value: AutocompleteOption | AutocompleteOption[]
  ) => {
    setPrimarySkillSelected(
      employeeSkills.find(({ _id }) => _id.toString() === (value as AutocompleteOption).value)
    );
  };

  const handleToggleAddEmployeeDialog = () => {
    dispatch(toggleAddEmployeeDialog());
  };

  const handleToggleAddEmployeeSkillDialog = () => {
    dispatch(toggleAddEmployeeSkillDialog());
  };

  const handleToggleAddDepartmentDialog = () => {
    dispatch(toggleAddDepartmentDialog());
  };

  // TODO: NEXT: Fix the filter, so that secondary skills contain all skills MINUS the selected primary skill
  // Secondary Skills should be VISIBLE but INACTIVE until PRIMARY skill is SELECTED
  // if PRIMARY skill is changed, secondary skills should either be emptied (reset) or if the primary skill
  // is in the list of secondary skills, just have it removed

  const departmentOptions: AutocompleteOption[] = departments.map(({ name, _id }) => ({
    title: name,
    value: _id.toString(),
  }));

  const primaryEmployeeSkillsOptions: AutocompleteOption[] =
    departmentSelected?.employeeSkillIDs.map((skillId) => {
      const skill = employeeSkills.find(({ _id }) => _id === Types.ObjectId(skillId))!;

      return { title: skill.name, value: skill._id.toString() };
    }) || [];

  const secondaryEmployeeSkillsOptions: AutocompleteOption[] = primarySkillSelected
    ? primaryEmployeeSkillsOptions.filter(
        ({ value }) => value !== primarySkillSelected._id.toString()
      )
    : [];

  //FIXME: SKILLS OPTIONS MUST BE FILTERED BASED ON THE SELECTED DEPARTMENT => INACTIVE UNTIL DEPARTMENT IS SELECTED
  return (
    <StyledAddEmployeeDialog
      {...props}
      formId={addEmployeeFormId}
      loading={loading}
      handleClose={handleToggleAddEmployeeDialog}
      open={addEmployee}
      title="This dialog <strong>adds</strong> an Employee!"
    >
      <form onSubmit={formik.handleSubmit} id={addEmployeeFormId}>
        <StyledFormikTextField fullWidth id="firstName" label="First Name" formik={formik} />
        <StyledFormikTextField fullWidth id="middleName" label="Middle Name" formik={formik} />
        <StyledFormikTextField fullWidth id="lastName" label="Last Name" formik={formik} />
        <StyledFormikTextField fullWidth id="egn" label="EGN" formik={formik} />
        <StyledAutocomplete
          {...(!addDepartment && { addOptionOnClick: handleToggleAddDepartmentDialog })}
          controlledOnChange={handleSelectDepartmentOnChange}
          options={departmentOptions}
          id="departmentId"
          formik={formik}
          inputLabel="Department"
        />
        <StyledAutocomplete
          {...(!addEmployeeSkill && { addOptionOnClick: handleToggleAddEmployeeSkillDialog })}
          controlledOnChange={handlePrimarySkillOnChange}
          options={primaryEmployeeSkillsOptions}
          id="skills.primaryID"
          formik={formik}
          inputLabel="Primary Skill"
          disabled={departmentSelected ? false : true}
        />
        <StyledAutocomplete
          {...(!addEmployeeSkill && { addOptionOnClick: handleToggleAddEmployeeSkillDialog })}
          multiple
          options={secondaryEmployeeSkillsOptions}
          id="skills.secondaryIDs"
          formik={formik}
          inputLabel="Secondary Skills"
          disabled={primarySkillSelected ? false : true}
        />
      </form>
    </StyledAddEmployeeDialog>
  );
};

//FIXME: Clear values from secondarySkills if primarySkill value changes
