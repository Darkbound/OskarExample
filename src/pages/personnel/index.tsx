import { NextPage } from "next";

import { Grid } from "~/components";

const Personnel: NextPage = () => {
  return (
    <>
      <Grid container direction="row" xs={12}>
        <Grid container item direction="column" xs={2}>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid container item direction="column" xs={10}>
          <Grid item xs={12}>
            Hi
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Personnel;
