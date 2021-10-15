/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef } from "react";
import styled from "styled-components";

import { boxProperties } from "~/styles";
import { LinkElProps } from "~/types";
import { omitNonDOMProps } from "~/utils";

export const StyledLink = styled(
  forwardRef<HTMLAnchorElement, LinkElProps>(({ children, ...restProps }, ref) => {
    const domProps = omitNonDOMProps(restProps);
    return (
      <a {...domProps} ref={ref}>
        {children}
      </a>
    );
  })
)`
  cursor: pointer;
  font-weight: ${({ fontWeight = 500 }) => fontWeight};
  transition: 0.2s color;

  &:focus,
  &:hover {
    text-decoration: underline;
  }

  && {
    ${boxProperties};
  }
`;
