import { Any } from "types/general";

import { CollapsibleTableRowProps } from "./collapsibleTableRow";

export interface CollapsibleTableProps {
  headerTitles: string[];
  items: CollapsibleTableRowProps[];
  ItemComponent: Any;
  HeadComponent: Any;
}
