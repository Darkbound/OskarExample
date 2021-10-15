import styled from "styled-components";

import { boxProperties } from "~/styles";
import { SpacerProps } from "~/types";
import { omitNonDOMProps } from "~/utils";

export const ColumnSpacer = styled((props: SpacerProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const domProps = omitNonDOMProps(props, ["value", "type"]);
  return <div {...domProps} />;
})`
  margin-bottom: ${({ value }) => value}px;
  margin-right: ${({ value }) => value}px;
  ${boxProperties};
`;

export const RowSpacer = styled((props: SpacerProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const domProps = omitNonDOMProps(props, ["value", "type"]);
  return <div {...domProps} />;
})`
  margin-top: ${({ value }) => value}px;
  width: 100%;
  ${boxProperties};
`;
