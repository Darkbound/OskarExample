import { AccountBalanceIcon, AppsIcon, PersonIcon } from "assets/Icons";

import { List } from "~/components";
import { drawerClose, useContext } from "~/context";

import { DrawerMenuItem } from "./DrawerMenuItem";
import { StyledDrawerMenu } from "./elements";

// TODO:
// whats wrong with the interface?
// Sending icon as prop, good or bad?

const menuItems = [
  {
    SvgIcon: AppsIcon,
    href: "/",
    text: "Home",
  },
  {
    SvgIcon: PersonIcon,
    href: "/personnel",
    text: "Personnel",
  },
  {
    SvgIcon: AccountBalanceIcon,
    href: "/accounting",
    text: "Accounting",
  },
];

export const DrawerMenu: React.FC = ({ ...props }) => {
  const { state, dispatch } = useContext();
  const { drawerOpened } = state;

  const handleCloseDrawerMenu = () => {
    dispatch(drawerClose());
  };

  return (
    <StyledDrawerMenu open={drawerOpened} onClose={handleCloseDrawerMenu} {...props}>
      <List>
        {menuItems.map(({ href, text, SvgIcon }, index) => (
          <DrawerMenuItem
            key={`${text}${index}`}
            onClick={handleCloseDrawerMenu}
            href={href}
            text={text}
            SvgIcon={SvgIcon}
          />
        ))}
      </List>
    </StyledDrawerMenu>
  );
};
