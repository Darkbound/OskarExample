import { DialogProps } from "../../dialog";

export type AddEmployeeSkillDialogProps = Omit<
  DialogProps,
  "doneFn" | "open" | "handleClose" | "loading" | "title"
>;
