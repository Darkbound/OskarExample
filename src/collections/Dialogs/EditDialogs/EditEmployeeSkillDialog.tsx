import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";

import { toggleAddDepartmentDialog, toggleEditEmployeeSkillDialog, useContext } from "~/context";
import { employeeSkillsRequests } from "~/data";
import { Any, AutocompleteOption, IEmployeeSkill, IEmployeeSkillInput } from "~/types";

import { StyledAutocomplete, StyledEditDialog, StyledFormikTextField } from "./elements";

const editEmployeeSkillFormId = "editEmployeeSkillForm";

// const editEmployeeSkillFormValidationSchema = {};

const editEmployeeSkillFormInitialValues: IEmployeeSkillInput = {
  departmentIDs: [],
  name: "",
};

export const EditEmployeeSkillDialog: React.FC = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const [selectedEmployeeSkill, setSelectedEmployeeSkill] = useState<IEmployeeSkill>();
  const { state, dispatch } = useContext();
  const { departments, employeeSkills } = state;

  const { editEmployeeSkill } = state.openedDialogs;

  const handleToggleAddDepartmentDialog = () => {
    dispatch(toggleAddDepartmentDialog());
  };

  const handleToggleEditEmployeeSkillDialog = () => {
    dispatch(toggleEditEmployeeSkillDialog());
  };

  const handleEditEmployeeSkill = async (
    employeeSkillInfo: IEmployeeSkillInput,
    { resetForm }: FormikHelpers<IEmployeeSkillInput>
  ) => {
    try {
      setLoading(true);

      if (selectedEmployeeSkill)
        await employeeSkillsRequests.patch(selectedEmployeeSkill._id, {
          employeeSkillInfo,
        });

      dispatch(toggleEditEmployeeSkillDialog());
      resetForm();

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const handleSetSelectedEmployeeSkill = (
    _event: React.ChangeEvent<Record<Any, Any>>,
    value: AutocompleteOption | AutocompleteOption[]
  ) => {
    const employeeSkillToEdit = employeeSkills.find(
      ({ _id }) => _id.toString() === (value as AutocompleteOption).value
    );

    setSelectedEmployeeSkill(employeeSkillToEdit);

    const editEmployeeSkillFormInitialValues: IEmployeeSkillInput = {
      departmentIDs: employeeSkillToEdit?.departmentIDs,
      name: employeeSkillToEdit?.name || "",
    };

    formik.setValues(editEmployeeSkillFormInitialValues);
  };

  const formik = useFormik({
    initialValues: editEmployeeSkillFormInitialValues,
    onSubmit: handleEditEmployeeSkill,
  });

  const employeeSkillsOptions: AutocompleteOption[] = employeeSkills.map(({ _id, name }) => ({
    title: name,
    value: _id.toString(),
  }));
  const departmentsOptions: AutocompleteOption[] = departments.map(({ _id, name }) => ({
    title: name,
    value: _id.toString(),
  }));
  const departmentsDefaultValues: AutocompleteOption[] = formik?.values?.departmentIDs!.map(
    (id) => {
      const department = departments.find(({ _id }) => id === _id)!;

      return { title: department.name, value: department._id.toString() };
    }
  );

  return (
    <StyledEditDialog
      {...props}
      loading={loading}
      handleClose={handleToggleEditEmployeeSkillDialog}
      open={editEmployeeSkill}
      formId={editEmployeeSkillFormId}
      formik={formik}
      title="This Dialog EDITS an Employee Skill"
    >
      <StyledAutocomplete
        options={employeeSkillsOptions}
        inputLabel="Select Employee Skill to Edit"
        controlledOnChange={handleSetSelectedEmployeeSkill}
      />
      <form id={editEmployeeSkillFormId} onSubmit={formik.handleSubmit}>
        <StyledFormikTextField id="name" label="New name for Employee Skill" formik={formik} />

        <StyledAutocomplete
          multiple
          options={departmentsOptions}
          filterSelectedOptions
          addOptionOnClick={handleToggleAddDepartmentDialog}
          controlledDefaultValue={departmentsDefaultValues}
          inputLabel="Departments of Employee skill"
          formik={formik}
          id="departmentIDs"
        />
      </form>
    </StyledEditDialog>
  );
};
