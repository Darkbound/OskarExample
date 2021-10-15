import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";

import { toggleAddEmployeeSkillDialog, toggleEditDepartmentDialog, useContext } from "~/context";
import { departmentsRequests } from "~/data";
import { Any, AutocompleteOption, IDepartment, IDepartmentInput } from "~/types";

import { StyledAutocomplete, StyledEditDialog, StyledFormikTextField } from "./elements";

const editDepartmentFormId = "editDepartmentForm";

const editDepartmentFormInitialValues: IDepartmentInput = {
  employeeSkillIDs: [],
  name: "",
};

export const EditDepartmentDialog: React.FC = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<IDepartment>();
  const { dispatch, state } = useContext();
  const { employeeSkills, departments } = state;
  const { editDepartment } = state.openedDialogs;

  const handleEditDepartment = async (
    departmentInfo: IDepartmentInput,
    { resetForm }: FormikHelpers<IDepartmentInput>
  ) => {
    try {
      setLoading(true);

      if (selectedDepartment) {
        await departmentsRequests.patch(selectedDepartment._id, {
          departmentInfo,
        });
      }

      dispatch(toggleEditDepartmentDialog());
      resetForm();
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const handleToggleEditDepartmentDialog = () => {
    dispatch(toggleEditDepartmentDialog());
  };

  const handleToggleAddEmployeeSkillDialog = () => {
    dispatch(toggleAddEmployeeSkillDialog());
  };

  const handleSetSelectedDepartment = (
    _event: React.ChangeEvent<Record<Any, Any>>,
    value: AutocompleteOption | AutocompleteOption[]
  ) => {
    const departmentToEdit = departments.find(
      ({ _id }) => _id.toString() === (value as AutocompleteOption).value
    )!;

    setSelectedDepartment(departmentToEdit);

    const editDepartmentFormInitialValues: IDepartmentInput = {
      employeeSkillIDs: departmentToEdit.employeeSkillIDs,
      name: departmentToEdit.name,
    };

    formik.setValues(editDepartmentFormInitialValues);
  };

  const formik = useFormik({
    initialValues: editDepartmentFormInitialValues,
    onSubmit: handleEditDepartment,

    // validationSchema: editDepartmentFormValidationSchema,
  });

  const departmentsOptions: AutocompleteOption[] = departments.map(({ _id, name }) => ({
    title: name,
    value: _id.toString(),
  }));

  const employeeSkillsDefaultValues: AutocompleteOption[] = formik?.values?.employeeSkillIDs!.map(
    (id) => {
      const skill = employeeSkills.find(({ _id }) => id === _id.toString())!;

      return { title: skill.name, value: skill._id.toString() };
    }
  );

  const employeeSkillsOptions: AutocompleteOption[] = employeeSkills.map(({ _id, name }) => ({
    title: name,
    value: _id.toString(),
  }));

  return (
    <StyledEditDialog
      {...props}
      loading={loading}
      handleClose={handleToggleEditDepartmentDialog}
      open={editDepartment}
      formId={editDepartmentFormId}
      formik={formik}
      title="This Dialog EDITS a Department"
    >
      <StyledAutocomplete
        options={departmentsOptions}
        inputLabel="Select Department to Edit"
        controlledOnChange={handleSetSelectedDepartment}
      />
      <form id={editDepartmentFormId} onSubmit={formik.handleSubmit}>
        <StyledFormikTextField id="name" label="New name of Department" formik={formik} />
        <StyledAutocomplete
          multiple
          filterSelectedOptions
          addOptionOnClick={handleToggleAddEmployeeSkillDialog}
          options={employeeSkillsOptions}
          controlledDefaultValue={employeeSkillsDefaultValues}
          inputLabel="Employee skills of Department"
          formik={formik}
          id="employeeSkillIDs"
        />
      </form>
    </StyledEditDialog>
  );
};
