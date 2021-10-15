import { Ref } from "react";

import { BoxProperties, MakeRequired } from "~/types";

type SpanElProps = JSX.IntrinsicElements["span"];

export interface TextProps extends BoxProperties, SpanElProps {
  ref?: Ref<HTMLSpanElement>;
  overflow?: string;
}

export type ClickableTextProps = MakeRequired<TextProps, "onClick" | "aria-label">;
