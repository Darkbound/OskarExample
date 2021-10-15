import { DialogProps } from "../../dialog";

export type AddEmployeeDialogProps = Omit<
  DialogProps,
  "doneFn" | "open" | "handleClose" | "loading" | "title"
>;
