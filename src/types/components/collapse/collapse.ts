import React from "react";

export interface CollapseProps {
  CollapseIcon?: React.FC;
  ExpandIcon?: React.FC;
  defaultExpanded?: boolean;
  expanded?: boolean;
  headText?: string;
}
