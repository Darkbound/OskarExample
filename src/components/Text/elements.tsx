/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef } from "react";
import styled from "styled-components";

import { boxProperties } from "~/styles";
import { ClickableTextProps, TextProps } from "~/types";
import { omitNonDOMProps } from "~/utils";

export const StyledText: React.FC<TextProps> = styled(
  forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
    const domProps = omitNonDOMProps(props, ["overflow"]);
    return <span {...domProps} ref={ref} />;
  })
)`
  && {
    ${boxProperties};
  }
`;

export const StyledClickableText = styled((props: ClickableTextProps) => <StyledText {...props} />)`
  cursor: pointer;
  outline-offset: 1px;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: 1px solid currentColor;
  }
`;

export const StyledSuperScript = styled.sup`
  font-size: 0.5em;
  vertical-align: super;
`;
