import styled from "styled-components";

import { AddCircleOutlineIcon } from "~/assets";
import { Button, Typography } from "~/components";
import { ButtonProps, TypographyProps } from "~/types";

export const StyledAddOptionButton = styled((props: ButtonProps) => (
  <Button {...props} variant="outlined" color="primary" fullWidth />
))`
  border: 2px solid #3f51b5;
`;

export const ButtonText = styled((props: TypographyProps) => <Typography {...props} />)`
  padding-left: 10px;
`;

//FIXME: Props?
export const ButtonIcon = styled((props) => <AddCircleOutlineIcon {...props} />)`
  font-size: 40px;
`;
