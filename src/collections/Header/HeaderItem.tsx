import { useRouter } from "next/router";
import { forwardRef } from "react";

import { HeaderItemProps } from "~/types";
import { getNthSubstringFromPath } from "~/utils";

import { StyledHeaderItem } from "./elements";

export const HeaderItem = forwardRef<HTMLAnchorElement, HeaderItemProps>(
  ({ text, href, ...props }, ref) => {
    const { pathname } = useRouter();

    const isHeaderItemActive = getNthSubstringFromPath(pathname, 2) === text?.toLowerCase();

    return (
      <StyledHeaderItem
        ref={ref}
        {...props}
        href={(href as string).toLowerCase()}
        isActive={isHeaderItemActive}
      >
        {text?.toUpperCase()}
      </StyledHeaderItem>
    );
  }
);
