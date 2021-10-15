import NextLink from "next/link";

import { LinkProps } from "~/types";

import { StyledLink } from "./elements";

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  ["aria-label"]: ariaLabel,
  ...props
}) => {
  if (typeof href === "string" && !as && (href?.includes("http") || href?.includes("mailto"))) {
    if (props.target === "_blank")
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <StyledLink
          href={href}
          aria-label={`${ariaLabel ?? ""} (Opens in a new window)`}
          rel={"noreferrer noopener"}
          {...props}
        >
          {children}
        </StyledLink>
      );
    else
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <StyledLink href={href} {...props}>
          {children}
        </StyledLink>
      );
  } else {
    return (
      <NextLink
        passHref
        href={href}
        as={as}
        replace={replace}
        shallow={shallow}
        scroll={scroll}
        prefetch={prefetch}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <StyledLink {...props}>{children}</StyledLink>
      </NextLink>
    );
  }
};
