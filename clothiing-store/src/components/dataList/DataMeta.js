
import { Typography } from "@mui/material";
import { DataMetaWrapper } from "../../style/data";
export default function DataMeta({ data, matches }) {
    return (
      <DataMetaWrapper>
        <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {data.name}
        </Typography>
        <Typography variant={matches ? "caption" : "body1"}>
          ${data.price}
        </Typography>
      </DataMetaWrapper>
    );
}