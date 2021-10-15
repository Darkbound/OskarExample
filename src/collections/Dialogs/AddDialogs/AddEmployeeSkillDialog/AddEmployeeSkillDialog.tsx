import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import {
  toggleAddDepartmentDialog,
  toggleAddEmployeeSkillDialog,
  updateEmployeeSkills,
  useContext,
} from "~/context";
import { employeeSkillsRequests } from "~/data";
import { AddEmployeeSkillDialogProps, AutocompleteOption, IEmployeeSkillInput } from "~/types";
import { yupTest } from "~/utils";

import {
  StyledAddEmployeeSkillDialog,
  StyledAutocomplete,
  StyledFormikTextField,
} from "./elements";

const fieldsLimits = {
  name: {
    maxLength: 20,
    minLength: 4,
  },
};

const addEmployeeSkillFormValidationSchema = Yup.object({
  name: Yup.string()
    .required("* Required")
    .test(
      "len",
      `Must be between ${fieldsLimits.name.minLength} and ${fieldsLimits.name.maxLength} characters`,
      (value) =>
        yupTest.stringLength(value, fieldsLimits.name.minLength, fieldsLimits.name.maxLength)
    ),
});

const addEmployeeSkillFormInitialValues: IEmployeeSkillInput = {
  name: "",
};

const addEmployeeFormId = "addEmployeeSkillForm";

export const AddEmployeeSkillDialog: React.FC<AddEmployeeSkillDialogProps> = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const { dispatch, state } = useContext();
  const { departments } = state;
  const { addEmployeeSkill, addDepartment } = state.openedDialogs;

  const handleToggleAddEmployeeSkillDialog = () => {
    dispatch(toggleAddEmployeeSkillDialog());
  };

  const handleAddEmployeeSkill = async (
    employeeSkillInfo: IEmployeeSkillInput,
    { resetForm }: FormikHelpers<IEmployeeSkillInput>
  ) => {
    try {
      setLoading(true);

      const employeeSkill = await employeeSkillsRequests.post({ employeeSkillInfo });

      dispatch(updateEmployeeSkills(employeeSkill));
      dispatch(toggleAddEmployeeSkillDialog());
      setLoading(false);
      resetForm();
    } catch (e) {
      setLoading(false);
      // TODO: Display error?
    }
  };

  const formik = useFormik({
    initialValues: addEmployeeSkillFormInitialValues,
    onSubmit: handleAddEmployeeSkill,
    validationSchema: addEmployeeSkillFormValidationSchema,
  });

  const handleToggleAddDepartmentDialog = () => {
    dispatch(toggleAddDepartmentDialog());
  };

  const departmentsOptions: AutocompleteOption[] = departments.map(({ _id, name }) => ({
    title: name,
    value: _id.toString(),
  }));

  return (
    <StyledAddEmployeeSkillDialog
      {...props}
      formId={addEmployeeFormId}
      loading={loading}
      handleClose={handleToggleAddEmployeeSkillDialog}
      open={addEmployeeSkill}
      title="This Dialog ADDS an Employee Skill"
    >
      <form onSubmit={formik.handleSubmit} id={addEmployeeFormId}>
        <StyledFormikTextField fullWidth id="name" name="name" label="Skill Name" formik={formik} />

        <StyledAutocomplete
          {...(!addDepartment && { addOptionOnClick: handleToggleAddDepartmentDialog })}
          id="departments"
          multiple
          options={departmentsOptions}
          formik={formik}
          inputLabel="Departments"
        />
      </form>
    </StyledAddEmployeeSkillDialog>
  );
};

//FIXME: FOR WHATEVER REASON SOMETIMES INITIALLY REQUQESTS TIMEOUT (not related to this component)

//FIXME: RESET FORM ON CANCEL
