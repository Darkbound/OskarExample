import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";

import { toggleEditEmployeeDialog, useContext } from "~/context";
import { Any, AutocompleteOption, IEmployee, IEmployeeInput } from "~/types";

import { StyledAutocomplete, StyledEditDialog } from "./elements";

const editEmployeeFormId = "editEmployeeForm";

// const editEmployeeFormValidationSchema = {};

const editEmployeeFormInitialValues: IEmployeeInput = {
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

export const EditEmployeeDialog: React.FC = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployee>();

  const { dispatch, state } = useContext();

  const { employees } = state;
  const { editEmployee } = state.openedDialogs;

  const handleToggleEditEmployeeDialog = () => {
    dispatch(toggleEditEmployeeDialog());
  };

  const handleSetSelectedEmployee = (
    _event: React.ChangeEvent<Record<Any, Any>>,
    value: AutocompleteOption | AutocompleteOption[]
  ) => {
    const employeeToEdit = employees.find(
      ({ _id }) => _id.toString() === (value as AutocompleteOption).value
    );

    setSelectedEmployee(employeeToEdit);

    const newEditEmployeeFormInitialValues = editEmployeeFormInitialValues;

    formik.setValues(newEditEmployeeFormInitialValues);
  };

  const handleEditEmployee = async (
    // What is the type of this object?
    employeeInfo: IEmployeeInput,
    { resetForm }: FormikHelpers<IEmployeeInput>
  ) => {
    try {
      setLoading(true);

      // TODO: Patch property doesn't exist on employeeRequests object
      // const patchedEmployee = await employeesRequests.patch(selectedEmployee?._id, {
      //   employeeInfo,
      // });

      dispatch(toggleEditEmployeeDialog());
      resetForm();
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: editEmployeeFormInitialValues,
    onSubmit: handleEditEmployee,
  });

  const employeesOptions: AutocompleteOption[] = employees.map(({ _id, fullName }) => ({
    title: fullName,
    value: _id.toString(),
  }));

  return (
    <StyledEditDialog
      {...props}
      loading={loading}
      open={editEmployee}
      handleClose={handleToggleEditEmployeeDialog}
      formId={editEmployeeFormId}
      formik={formik}
      title="This Dialog EDITS an Employee"
    >
      <StyledAutocomplete
        options={employeesOptions}
        inputLabel="Select Employee to Edit"
        controlledOnChange={handleSetSelectedEmployee}
      />
    </StyledEditDialog>
  );
};
