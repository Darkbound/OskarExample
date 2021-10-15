import { MenuItem } from "@material-ui/core";
import React, { useState } from "react";

import { ExpandMoreIcon } from "~/assets";
import { Button, Typography } from "~/components";
import {
  toggleAddDepartmentDialog,
  toggleAddEmployeeDialog,
  toggleAddEmployeeSkillDialog,
  toggleEditDepartmentDialog,
  toggleEditEmployeeDialog,
  toggleEditEmployeeSkillDialog,
  useContext,
} from "~/context";

import { StyledGrid, StyledMenu } from "./elements";

export const PersonnelControls: React.FC = ({ ...props }) => {
  const { dispatch } = useContext();

  const [openAddMenuAnchorEl, setOpenAddMenuAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openEditMenuAnchorEl, setOpenEditMenuAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleCloseAddMenu = () => {
    setOpenAddMenuAnchorEl(null);
  };
  const handleCloseEditMenu = () => {
    setOpenEditMenuAnchorEl(null);
  };

  const handleOpenAddMenu = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    currentTarget && setOpenAddMenuAnchorEl(currentTarget);
  };
  const handleOpenEditMenu = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    currentTarget && setOpenEditMenuAnchorEl(currentTarget);
  };

  // TODO: Extract dialogNames into enum and share it.
  const handleToggleAddDepartmentDialog = () => {
    dispatch(toggleAddDepartmentDialog());

    handleCloseAddMenu();
  };

  const handleToggleAddEmployeeDialog = () => {
    dispatch(toggleAddEmployeeDialog());

    handleCloseAddMenu();
  };

  const handleToggleAddEmployeeSkillDialog = () => {
    dispatch(toggleAddEmployeeSkillDialog());

    handleCloseAddMenu();
  };

  const handleToggleEditDepartmentDialog = () => {
    dispatch(toggleEditDepartmentDialog());

    handleCloseEditMenu();
  };

  const handleToggleEditEmployeeDialog = () => {
    dispatch(toggleEditEmployeeDialog());

    handleCloseEditMenu();
  };

  const handleToggleEditEmployeeSkillDialog = () => {
    dispatch(toggleEditEmployeeSkillDialog());

    handleCloseEditMenu();
  };

  return (
    <>
      <StyledGrid {...props} item xs={1}>
        <Button color="primary" variant="contained" onClick={handleOpenAddMenu}>
          <Typography>Add</Typography>
          <ExpandMoreIcon />
        </Button>
        <StyledMenu
          anchorEl={openAddMenuAnchorEl}
          open={Boolean(openAddMenuAnchorEl)}
          onClose={handleCloseAddMenu}
        >
          <MenuItem onClick={handleToggleAddDepartmentDialog}>Department</MenuItem>
          <MenuItem onClick={handleToggleAddEmployeeDialog}>Employee</MenuItem>
          <MenuItem onClick={handleToggleAddEmployeeSkillDialog}>Employee skill</MenuItem>
        </StyledMenu>
      </StyledGrid>
      <StyledGrid {...props} item xs={1}>
        <Button color="primary" variant="contained" onClick={handleOpenEditMenu}>
          <Typography>Edit</Typography>
          <ExpandMoreIcon />
        </Button>
        <StyledMenu
          anchorEl={openEditMenuAnchorEl}
          open={Boolean(openEditMenuAnchorEl)}
          onClose={handleCloseEditMenu}
        >
          <MenuItem onClick={handleToggleEditDepartmentDialog}>Department</MenuItem>
          <MenuItem onClick={handleToggleEditEmployeeDialog}>Employee</MenuItem>
          <MenuItem onClick={handleToggleEditEmployeeSkillDialog}>Employee skill</MenuItem>
        </StyledMenu>
      </StyledGrid>
    </>
  );
};

//TODO: toggle edit/delete dialogs context
//TODO: on clicks for toggles
//TODO: boilerplate dialogs for edit/delete
