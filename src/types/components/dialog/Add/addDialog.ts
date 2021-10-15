import { Any } from "~/types";

import { DialogProps } from "../dialog";

export interface AddDialogProps extends Omit<DialogProps, "doneFn" | "cancelFn" | "loading"> {
  addFn: (values: Any) => void;
}
