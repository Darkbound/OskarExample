import { useContext } from "~/context";
import { drawerOpen } from "~/context";

import { StyledIconButton, StyledToggleSideMenuButton } from "./elements";

export const ToggleSideMenuButton: React.FC = ({ ...props }) => {
  const { dispatch } = useContext();

  const handleOpenDrawerMenu = () => {
    dispatch(drawerOpen());
  };

  return (
    <StyledIconButton onClick={handleOpenDrawerMenu} {...props}>
      <StyledToggleSideMenuButton />
    </StyledIconButton>
  );
};
