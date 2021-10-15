import { ToggleSideMenuButton } from "~/components";

import { StyledHeader, StyledToolbar } from "./elements";

export const Header: React.FC = ({ children, ...props }) => {
  return (
    <StyledHeader position="static" {...props}>
      <StyledToolbar>
        <ToggleSideMenuButton />
        {children}
      </StyledToolbar>
    </StyledHeader>
  );
};
