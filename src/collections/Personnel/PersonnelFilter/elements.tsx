import styled from "styled-components";

import {
  Button,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "~/components";
import { GridProps } from "~/types";

export const FilterBackgroundPaper = styled((props) => <Paper {...props} />)``;

export const DepartmentRadio = styled((props) => <Radio {...props} />)``;

export const DepartmentsRadioGroup = styled((props) => <RadioGroup {...props} />)``;

export const EmployeeSkillCheckbox = styled((props) => <Checkbox {...props} />)``;

export const FilterButton = styled((props) => <Button {...props} />)`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-weight: bold;
`;

export const StyledGrid = styled((props: GridProps) => <Grid {...props} />)``;

export const StyledPersonnelFilter = styled.div``;

export const StyledCollapse = styled((props) => <Collapse {...props} />)``;

export const StyledFormControl = styled((props) => <FormControl {...props} />)`
  padding-left: 1rem;
`;

export const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)``;
