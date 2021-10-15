import { Any, FilterProps } from "~/types";

export interface RadioFilterProps extends FilterProps {
  setFilteredItem: (filteredItem: Any) => void;
}
