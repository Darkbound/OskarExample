import { Ref } from "react";

import { BoxProperties } from "~/types";

type DivElProps = JSX.IntrinsicElements["div"];
export interface ContainerProps extends DivElProps, BoxProperties {
  ref?: Ref<HTMLDivElement>;
  fluid?: boolean;
}

export interface FlexContainerProps extends DivElProps, BoxProperties {
  ref?: Ref<HTMLDivElement>;
  inline?: boolean;
}
