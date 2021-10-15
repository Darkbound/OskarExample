import { forwardRef } from "react";
import styled from "styled-components";

import { boxProperties } from "~/styles";
import { BoxProps } from "~/types";
import { omitNonDOMProps } from "~/utils";

export const StyledBox = styled(
  forwardRef<HTMLDivElement, BoxProps>(({ children, ...restProps }, ref) => {
    const props = omitNonDOMProps(restProps);
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  })
)`
  ${boxProperties};
`;
