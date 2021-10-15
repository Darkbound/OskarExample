import { Any, BoxProperties } from "~/types";

type HeadingKind = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingElProps = JSX.IntrinsicElements["h1"];

export interface HeadingProps extends BoxProperties, HeadingElProps {
  kind: HeadingKind;
  as?: Any;
}
