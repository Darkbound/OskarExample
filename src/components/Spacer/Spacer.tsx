import { SpacerProps } from "~/types";

import { ColumnSpacer, RowSpacer } from "./elements";

export const Spacer: React.FC<SpacerProps> = ({ type, value }) => {
  return type === "column" ? <ColumnSpacer value={value} /> : <RowSpacer value={value} />;
};
