import { DialogTitleProps } from "~/types";

import { StyledDialogTitle } from "./elements";

export const DialogTitle: React.FC<DialogTitleProps> = ({ ...props }) => {
  return <StyledDialogTitle {...props} />;
};
