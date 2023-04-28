import { useState } from "react";
import { Data, LookIn, DataImage } from "../../style/data";
import DataMeta from "./DataMeta";

const DataCardMobile = ({ data, matches }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Data onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <DataImage src={data.image} />
        <DataMeta data={data} matches={matches} />
      </Data>
      <LookIn variant="contained">View</LookIn>
    </>
  );
};

export default DataCardMobile;
