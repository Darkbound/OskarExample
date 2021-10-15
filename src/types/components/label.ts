import { BoxProperties } from "~/types";

type LabelElProps = JSX.IntrinsicElements["label"];

export type LabelKind = "sr-only";

export interface LabelProps extends BoxProperties, LabelElProps {
  kind?: LabelKind;
}
