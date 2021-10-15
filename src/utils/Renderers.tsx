import { AccountingHeader, AppHeader, PersonnelHeader } from "~/collections";
import { getNthSubstringFromPath } from "~/utils";

//eslint-disable-next-line
export const renderHeaderComponent = (pathname: string) => {
  const currentPath: string = getNthSubstringFromPath(pathname, 1);

  if (currentPath === "personnel") {
    return <PersonnelHeader />;
  } else if (currentPath === "accounting") {
    return <AccountingHeader />;
  } else {
    return <AppHeader />;
  }
};
