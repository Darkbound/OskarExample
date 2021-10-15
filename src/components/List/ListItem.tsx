import { ListItemProps } from "~/types";

import { StyledListItem } from "./elements";

export const ListItem: React.FC<ListItemProps> = ({ onClick, ...props }) => {
  return <StyledListItem button onClick={onClick} {...props} />;
};
