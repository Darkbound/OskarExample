import { BoxProps } from "~/types";

type SpacerTypes = "column" | "row";

export interface SpacerProps extends BoxProps {
  value: number | string;
  type?: SpacerTypes;
}
