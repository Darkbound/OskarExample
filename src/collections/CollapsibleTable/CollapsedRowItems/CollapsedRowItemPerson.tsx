import { Typography } from "~/components";
import { CollapsibleTableRowProps } from "~/types";
import { getDaysBetweenTwoDates } from "~/utils";

import {
  DeleteButton,
  EditButton,
  PersonContainer,
  PersonControls,
  PersonDetail,
  PersonDetails,
  PersonSchedule,
  ScheduleTable,
  ScheduleTableBody,
  ScheduleTableCell,
  ScheduleTableHead,
  ScheduleTableRow,
} from "./elements";

const today = new Date();
const twoWeeksAhead = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 13);

export const CollapsedRowItemPerson: React.FC<CollapsibleTableRowProps> = ({
  item: tableItem,
  ...props
}) => {
  const { fullName, department, primarySkill, secondarySkills, createdAt, schedule } = tableItem;

  const days = getDaysBetweenTwoDates([today, twoWeeksAhead]);

  //FIXME: STOP ARRAY WHEN END OF DAYS REACHED (normal For loop)
  const shifts = schedule[0][today.getMonth()].map(({ shift }, index) => ({
    day: days[index],
    shift,
  }));

  return (
    <PersonContainer container direction="row" {...props}>
      <PersonDetails container item direction="row" xs={10}>
        <PersonDetails container item direction="column">
          <PersonDetail item>
            <Typography>Name: {`${fullName}`}</Typography>
          </PersonDetail>
          <PersonDetail item>
            <Typography>Department: {department}</Typography>
          </PersonDetail>
          <PersonDetail item>
            <Typography>Main skill: {primarySkill}</Typography>
          </PersonDetail>
          <PersonDetail item>
            <Typography>Secondary skills: {secondarySkills}</Typography>
          </PersonDetail>
          <PersonDetail item>
            <Typography>Created at: {createdAt}</Typography>
          </PersonDetail>

          <PersonDetail item>
            <Typography>Paid leave: {createdAt}</Typography>
          </PersonDetail>

          <PersonDetail item>
            <Typography>Non-Paid Leave: {createdAt}</Typography>
          </PersonDetail>

          <PersonDetail item>
            <Typography>Sick days: {createdAt}</Typography>
          </PersonDetail>

          <PersonDetail item>
            <Typography>Phone number: {createdAt}</Typography>
          </PersonDetail>
        </PersonDetails>
      </PersonDetails>
      <PersonControls
        container
        direction="row"
        item
        xs={2}
        alignContent="flex-start"
        justify="flex-end"
      >
        <EditButton variant="contained" />
        <DeleteButton variant="contained" />
      </PersonControls>
      <PersonSchedule container item direction="column" alignItems="center" xs={12}>
        <PersonSchedule item></PersonSchedule>
        <PersonSchedule>
          <ScheduleTable>
            <ScheduleTableHead>
              <ScheduleTableRow>
                {days.map((day) => (
                  <ScheduleTableCell key={`thtrtctd${day}`}>{day}</ScheduleTableCell>
                ))}
              </ScheduleTableRow>
            </ScheduleTableHead>
            <ScheduleTableBody item xs={10}>
              <ScheduleTableRow>
                {days.map((day, index) => (
                  <ScheduleTableCell key={`trtd${day}`}>{shifts[index].shift}</ScheduleTableCell>
                ))}
              </ScheduleTableRow>
            </ScheduleTableBody>
          </ScheduleTable>
        </PersonSchedule>
      </PersonSchedule>
    </PersonContainer>
  );
};
