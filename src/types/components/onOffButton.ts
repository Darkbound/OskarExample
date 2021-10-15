import { SvgIconComponent } from "@material-ui/icons";

export interface OnOffButtonProps {
  state: boolean;
  OnIcon: SvgIconComponent;
  OffIcon: SvgIconComponent;
  onClick: () => void;
}
