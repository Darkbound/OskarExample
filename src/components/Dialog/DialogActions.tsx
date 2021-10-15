import { DialogActionsProps } from "~/types";

import { StyledDialogActions } from "./elements";

export const DialogActions: React.FC<DialogActionsProps> = ({ ...props }) => {
  return <StyledDialogActions {...props} />;
};
