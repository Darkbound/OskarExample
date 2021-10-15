import { forwardRef } from "react";
import styled, { css } from "styled-components";

import { boxProperties, maxExtraSmall } from "~/styles";
import { ContainerProps, FlexContainerProps } from "~/types";
import { omitNonDOMProps } from "~/utils";

const baseContainerStyles = css<ContainerProps>`
  margin: 0 auto;
  max-width: calc(1190px + 24px);
  padding: 0 24px;
  width: 100%;

  @media (max-width: ${maxExtraSmall}) {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

const containerStyles = css<ContainerProps>`
  ${baseContainerStyles}
`;

export const StyledContainer = styled(({ children, ...props }: ContainerProps) => {
  const domProps = omitNonDOMProps(props, ["fluid"]);
  return <div {...domProps}>{children}</div>;
})`
  ${containerStyles}
  ${boxProperties};
`;

export const StyledFlexContainer = styled(
  forwardRef<HTMLDivElement, FlexContainerProps>((props, ref) => {
    const domProps = omitNonDOMProps(props, ["inline"]);
    return <div {...domProps} ref={ref} />;
  })
)`
  display: flex;
  ${boxProperties};
`;
