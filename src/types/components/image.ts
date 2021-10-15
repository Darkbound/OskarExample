import { BoxProperties } from "~/types";

type ImageKind = "fluid";

type ImageElProps = JSX.IntrinsicElements["img"];

interface ImageBase extends BoxProperties, Omit<ImageElProps, "height" | "width"> {
  kind?: ImageKind;
  objectFit?: "cover" | "contain";
  placeholder?: string;
}

export type ImageProps = ImageBase;
