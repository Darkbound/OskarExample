import { NextPage } from "next";

import { PersonnelFilter, PersonnelScheduleTable } from "~/collections";
import { Grid } from "~/components";

const PersonnelSchedule: NextPage = () => {
  return (
    <Grid container direction="row">
      <Grid container item direction="column" xs={2}>
        <PersonnelFilter />
      </Grid>
      <Grid container item direction="column" xs={10}>
        <PersonnelScheduleTable allowEditing={false} days={30} personInfo={{}} />
      </Grid>
    </Grid>
  );
};

export default PersonnelSchedule;
