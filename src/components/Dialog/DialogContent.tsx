import { DialogContentProps } from "~/types";

import { StyledDialogContent } from "./elements";

export const DialogContent: React.FC<DialogContentProps> = ({ ...props }) => {
  return <StyledDialogContent {...props} />;
};
