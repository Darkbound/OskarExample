import { SvgIconComponent } from "@material-ui/icons";

import { ButtonProps } from "./button";

export interface ButtonWithIconProps extends ButtonProps {
  Icon: SvgIconComponent;
  text: string;
}
