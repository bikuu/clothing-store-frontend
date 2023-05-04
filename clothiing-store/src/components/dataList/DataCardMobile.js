import { Data, LookIn, DataImage } from "../../style/data";
import DataMeta from "./DataMeta";

const DataCardMobile = ({ data, matches }) => {


  return (
    <>
      <Data >
        <DataImage src={data.image} />
        <DataMeta data={data} matches={matches} />
      </Data>
      <LookIn variant="contained">View</LookIn>
    </>
  );
};

export default DataCardMobile;
