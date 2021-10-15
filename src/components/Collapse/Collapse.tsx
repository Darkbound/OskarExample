import { useEffect, useState } from "react";

import { CollapseProps } from "~/types";

import { StyledCollapse, StyledCollapseIcon, StyledExpandIcon, StyledIconButton } from "./elements";

export const Collapse: React.FC<CollapseProps> = ({
  ExpandIcon = StyledExpandIcon,
  CollapseIcon = StyledCollapseIcon,
  defaultExpanded = true,
  expanded,
  headText,
  ...props
}) => {
  const controlled = typeof expanded !== "undefined";

  const [controlledIsExpanded, setControlledIsExpanded] = useState<boolean | undefined>(
    defaultExpanded
  );

  useEffect(() => {
    controlled && setControlledIsExpanded(expanded);
  }, [expanded]);

  const handleSetExpanded = () => {
    setControlledIsExpanded((prevState) => !prevState);
  };

  return (
    <>
      {!controlled && (
        <StyledIconButton onClick={handleSetExpanded}>
          {controlledIsExpanded ? <CollapseIcon /> : <ExpandIcon />}
          {headText}
        </StyledIconButton>
      )}

      <StyledCollapse in={controlledIsExpanded} {...props} />
    </>
  );
};

// if expanded is controlled it must come from the outside
// it must also has its own separate button => StyledIconButton becomes useless
// expanded itself can not be used as it is a boolean and it will still render StyledIconButton at some point
// if noButton is true, then expanded should be REQUIRED
