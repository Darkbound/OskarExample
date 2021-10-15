import { CollapsibleTableProps } from "~/types";

import { CollapsibleTableRow } from "./CollapsibleTableRow";
import {
  StyledTable,
  StyledTableBody,
  StyledTableContainer,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableRow,
} from "./elements";

export const CollapsibleTable: React.FC<CollapsibleTableProps> = ({
  headerTitles,
  items,
  ItemComponent,
  HeadComponent,
  ...props
}) => {
  return (
    <StyledTableContainer {...props}>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            {headerTitles.map((title, index) => (
              <StyledTableHeadCell key={`${index}sthc${title}`}>{title}</StyledTableHeadCell>
            ))}
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {items.map((item, index) => (
            <CollapsibleTableRow
              key={`${index}stbctr`}
              item={item.item}
              ItemComponent={ItemComponent}
              HeadComponent={HeadComponent}
            />
          ))}
        </StyledTableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};
