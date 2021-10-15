import { Ref } from "react";

import { LinkProps } from "~/types";

export interface HeaderItemProps extends Omit<LinkProps, "as"> {
  text?: string;
  isActive?: boolean;
  ref?: Ref<HTMLAnchorElement>;
}
