import { SvgIconProps } from "@material-ui/core";

export interface DrawerMenuItemProps {
  onClick: () => void;
  SvgIcon: (props: SvgIconProps) => JSX.Element;
  href: string;
  text: string;
}
