import styled, { css } from "styled-components";

import { boxProperties } from "~/styles";
import { LabelProps } from "~/types";
import { omitNonDOMProps } from "~/utils";

const labelBase = css`
  display: inline-block;
  font-weight: 500;
  margin-bottom: 3px;
  text-align: left;
  width: 100%;
`;

const defaultLabel = css`
  ${labelBase}
`;

const srOnlyLabel = css`
  clip: rect(1px 1px 1px 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; /* A fix that only works for IE6, IE7 */
  width: 1px;
`;

const LabelStyles = css`
  ${({ kind }: LabelProps) => {
    switch (kind) {
      case "sr-only":
        return css`
          ${srOnlyLabel}
        `;
      default:
        return css`
          ${defaultLabel};
        `;
    }
  }};
`;

export const StyledLabel = styled(({ children, ...props }: LabelProps) => {
  const domProps = omitNonDOMProps(props, ["kind"]);
  // eslint-disable-next-line
  return <label {...domProps}>{children}</label>;
})`
  ${LabelStyles};
  ${boxProperties};
`;
