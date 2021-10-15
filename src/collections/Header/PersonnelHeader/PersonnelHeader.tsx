import { HeaderItem } from "~/collections";

import { StyledPersonnelHeader } from "./elements";

const pageHref = "/personnel";

const headerItems = [
  { href: `${pageHref}/list`, text: "List" },
  { href: `${pageHref}/schedule`, text: "Schedule" },
  { href: `${pageHref}/vacations`, text: "Vacations" },
];

export const PersonnelHeader: React.FC = ({ ...props }) => {
  return (
    <StyledPersonnelHeader {...props}>
      {headerItems.map(({ href, text }, index) => (
        <HeaderItem key={`${text}${index}`} text={text} href={href} />
      ))}
    </StyledPersonnelHeader>
  );
};
