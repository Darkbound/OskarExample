import React from "react";

// Do I import assets here as these are just icons (basically styling) or do I do this within elements.tsx?
import { ExpandLess, ExpandMore } from "~/assets";
import { CollapsibleTableRowProps } from "~/types";

import {
  StyledCollapsedTableHeadCell,
  StyledCollapsedTableHeadRow,
  StyledOnOffButton,
} from "./elements";

export const CollapsedRowHeadPerson: React.FC<CollapsibleTableRowProps> = ({
  item,
  handleSetExpanded,
  expanded,
  ...props
}) => {
  const { fullName, primarySkill } = item;

  return (
    <StyledCollapsedTableHeadRow {...props}>
      <StyledCollapsedTableHeadCell colSpan={1}>
        <StyledOnOffButton
          onClick={handleSetExpanded}
          OnIcon={ExpandLess}
          OffIcon={ExpandMore}
          state={expanded}
        />
      </StyledCollapsedTableHeadCell>
      <StyledCollapsedTableHeadCell>Number</StyledCollapsedTableHeadCell>

      <StyledCollapsedTableHeadCell>{`${fullName}`}</StyledCollapsedTableHeadCell>

      <StyledCollapsedTableHeadCell>{primarySkill}</StyledCollapsedTableHeadCell>
    </StyledCollapsedTableHeadRow>
  );
};
