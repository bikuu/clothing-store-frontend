import React from "react";
import { datas } from "./../../data/index";
import { Container, Grid } from "@mui/material";
import DataCardMobile from "./DataCardMobile";
import DataCardDesktop from "./DataCardDesktop";

const DataList = ({ matches }) => {
  const renderDatas = datas.map((data) => (
    <Grid
      item
      key={data.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      {matches ? (
        <DataCardMobile data={data} matches={matches} />
      ) : (
        <DataCardDesktop data={data} matches={matches} />
      )}
    </Grid>
  ));
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderDatas}
      </Grid>
    </Container>
  );
};

export default DataList;
