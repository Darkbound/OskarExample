import { Any, FilterProps } from "~/types";

export interface CheckboxFilterProps extends FilterProps {
  items: Any[];
  setFilteredItems: (filteredItems: Any[]) => void;
}
