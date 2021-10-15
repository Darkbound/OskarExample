import { DialogProps } from "../../dialog";

export type AddDepartmentDialogProps = Omit<
  DialogProps,
  "doneFn" | "open" | "handleClose" | "loading" | "title"
>;
