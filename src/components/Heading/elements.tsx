import { createElement } from "react";
import styled, { css } from "styled-components";

import { boxProperties } from "~/styles";
import { HeadingProps } from "~/types";
import { omitNonDOMProps } from "~/utils";

const headerBase = css<HeadingProps>`
  font-weight: 500;
  margin: 0.5rem 0;
  padding: 0;
`;

const H1 = css`
  ${headerBase}
  font-size: 48px;
`;

const H2 = css`
  ${headerBase};
  font-size: 40px;
`;

const H3 = css`
  ${headerBase}
  font-size: 32px;
`;

const H4 = css`
  ${headerBase}
  font-size: 24px;
`;

const H5 = css`
  ${headerBase};
  font-size: 16px;
`;

const H6 = css`
  ${headerBase}
  font-size: 12px;
`;

const headerStyles = css<HeadingProps>`
  ${({ kind }) => {
    switch (kind) {
      case "h1":
        return css`
          ${H1}
        `;
      case "h2":
        return css`
          ${H2}
        `;
      case "h3":
        return css`
          ${H3}
        `;
      case "h4":
        return css`
          ${H4}
        `;
      case "h5":
        return css`
          ${H5}
        `;
      case "h6":
        return css`
          ${H6}
        `;
      default:
        return css`
          ${H3};
        `;
    }
  }};
`;

export const StyledHeading = styled(({ children, kind, ...restProps }: HeadingProps) => {
  const props = omitNonDOMProps(restProps);
  return createElement(kind, props, children);
})`
  ${headerStyles};
  &&& {
    ${boxProperties};
  }
`;
