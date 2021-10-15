import { Ref } from "react";

import { BoxProperties } from "~/types";

type DivElProps = JSX.IntrinsicElements["div"];

export interface BoxProps extends DivElProps, BoxProperties {
  ref?: Ref<HTMLDivElement>;
}
