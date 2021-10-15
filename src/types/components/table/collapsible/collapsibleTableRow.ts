import { Any } from "types/general";

// TODO: Replace Any with something appropriate
export interface CollapsibleTableRowProps {
  item: {
    fullName: string;
    department: string;
    primarySkill: string;
    secondarySkills: string;
    createdAt: string;
    schedule: { shift: string }[][][];
  };
  ItemComponent: Any;
  HeadComponent: Any;
  handleSetExpanded?: () => void;
  expanded?: boolean;
}
