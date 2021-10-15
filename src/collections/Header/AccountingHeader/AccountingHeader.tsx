import { HeaderItem } from "../HeaderItem";
import { StyledAccountingHeader } from "./elements";

const pageHref = "/accounting";

const headerItems = [
  { href: `${pageHref}/invoices`, text: "Invoices" },
  { href: `${pageHref}/inventory`, text: "Inventory" },
];

export const AccountingHeader: React.FC = ({ ...props }) => {
  return (
    <StyledAccountingHeader {...props}>
      {headerItems.map(({ href, text }, index) => (
        <HeaderItem key={`${text}${index}`} text={text} href={href} />
      ))}
    </StyledAccountingHeader>
  );
};
