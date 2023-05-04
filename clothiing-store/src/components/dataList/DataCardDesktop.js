import {  useState } from "react";
import { Data, LookIn, DataImage } from "../../style/data";

import DataMeta from "./DataMeta";

const DataCardDesktop = ({ data, matches }) => {
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
        {(showOptions || matches) && (
          <LookIn show={showOptions} variant="contained">
            View
          </LookIn>
        )}
      </Data>
      <DataMeta data={data} />
    </>
  );
};

export default DataCardDesktop;
