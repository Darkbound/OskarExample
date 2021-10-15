import { DialogContentTextProps } from "~/types";

import { StyledDialogContentText } from "./elements";

export const DialogContentText: React.FC<DialogContentTextProps> = ({ ...props }) => {
  return <StyledDialogContentText {...props} />;
};
