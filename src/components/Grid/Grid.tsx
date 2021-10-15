import { GridProps } from "~/types";

import { StyledGrid } from "./elements";

export const Grid: React.FC<GridProps> = ({ ...props }) => {
  return <StyledGrid {...props} />;
};
