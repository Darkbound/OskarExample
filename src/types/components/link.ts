import { LinkProps as NextLinkProps } from "next/link";

import { BoxProperties } from "~/types";

type HtmlLinkProps = JSX.IntrinsicElements["a"];

export type LinkElProps = HtmlLinkProps & BoxProperties;

export type LinkProps = NextLinkProps & Omit<LinkElProps, "href" | "type">;

export interface SocialLinkProps extends Omit<LinkElProps, "type"> {
  imageSrc: string;
}
