import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import {
  toggleAddDepartmentDialog,
  toggleAddEmployeeSkillDialog,
  updateDepartments,
  useContext,
} from "~/context";
import { departmentsRequests } from "~/data";
import { AddDepartmentDialogProps, AutocompleteOption, IDepartmentInput } from "~/types";
import { yupTest } from "~/utils";

import { StyledAddDepartmentDialog, StyledAutocomplete, StyledFormikTextField } from "./elements";

const fieldsLimits = {
  name: {
    maxLength: 20,
    minLength: 4,
  },
};

const addDepartmentFormValidationSchema = Yup.object({
  employeeSkillIDs: Yup.array().of(Yup.string().length(24)),
  name: Yup.string()
    .required("* Required")
    .test(
      "len",
      `Must be between ${fieldsLimits.name.minLength} and ${fieldsLimits.name.maxLength} characters`,
      (value) =>
        yupTest.stringLength(value, fieldsLimits.name.minLength, fieldsLimits.name.maxLength)
    ),
});

const addDepartmentFormInitialValues: IDepartmentInput = {
  employeeSkillIDs: [],
  name: "",
};

const addDepartmentFormId = "addDepartmentForm";

export const AddDepartmentDialog: React.FC<AddDepartmentDialogProps> = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const { dispatch, state } = useContext();
  const { employeeSkills } = state;
  const { addDepartment, addEmployeeSkill } = state.openedDialogs;

  const handleToggleAddDepartmentDialog = () => {
    dispatch(toggleAddDepartmentDialog());
  };

  const handleAddDepartment = async (
    departmentInfo: IDepartmentInput,
    { resetForm }: FormikHelpers<IDepartmentInput>
  ) => {
    try {
      setLoading(true);

      const newDepartment = await departmentsRequests.post({ departmentInfo });

      dispatch(updateDepartments(newDepartment));
      dispatch(toggleAddDepartmentDialog());
      setLoading(false);
      resetForm();
    } catch (e) {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: addDepartmentFormInitialValues,
    onSubmit: handleAddDepartment,
    validationSchema: addDepartmentFormValidationSchema,
  });

  const employeeSkillsOptions: AutocompleteOption[] = employeeSkills.map(({ _id, name }) => ({
    title: name,
    value: _id.toString(),
  }));

  const handleToggleAddEmployeeSkillDialog = () => {
    dispatch(toggleAddEmployeeSkillDialog());
  };

  return (
    <StyledAddDepartmentDialog
      {...props}
      formId={addDepartmentFormId}
      loading={loading}
      handleClose={handleToggleAddDepartmentDialog}
      open={addDepartment}
      title="This dialog ADDS a Department"
    >
      <form onSubmit={formik.handleSubmit} id={addDepartmentFormId}>
        <StyledFormikTextField id="name" label="Department Name" formik={formik} />
        <StyledAutocomplete
          {...(!addEmployeeSkill && { addOptionOnClick: handleToggleAddEmployeeSkillDialog })}
          multiple
          options={employeeSkillsOptions}
          id="employeeSkillIDs"
          formik={formik}
          inputLabel="Employee skills"
        />
      </form>
    </StyledAddDepartmentDialog>
  );
};

//TODO: Database cross model operations (e.g. Department employee skill added => also add department Id to skill)
