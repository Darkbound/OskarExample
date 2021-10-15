import styled from "styled-components";

import { Button, Typography } from "~/components";
import { ButtonProps, TypographyProps } from "~/types";

export const StyledButtonWithIcon = styled((props: ButtonProps) => <Button {...props} />)`
  border: 2px solid #3f51b5;
`;

export const ButtonText = styled((props: TypographyProps) => <Typography {...props} />)``;
