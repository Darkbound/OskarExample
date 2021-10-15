import React, { useState } from "react";

import { CollapsibleTableRowProps } from "~/types";

import { StyledCollapse, StyledTableCell, StyledTableRow } from "./elements";

export const CollapsibleTableRow: React.FC<CollapsibleTableRowProps> = ({
  item,
  ItemComponent,
  HeadComponent,
  ...props
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleSetExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <React.Fragment {...props}>
      <HeadComponent item={item} handleSetExpanded={handleSetExpanded} expanded={expanded} />

      <StyledTableRow>
        <StyledTableCell colSpan={4}>
          <StyledCollapse timeout="auto" unmountOnExit expanded={expanded} defaultExpanded={false}>
            <ItemComponent item={item} />
          </StyledCollapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
};
