import React from "react";
import { Tooltip } from "@mui/material";
import hot from "../../assets/images/hot.png";
import noSugar from "../../assets/images/no-sugar.png";
import vegan from "../../assets/images/vegan.png";
import peanut from "../../assets/images/peanut.png";

const CategorizeComponent = ({category, id}) => {
  if (category === "vegan") {
    return (
      <Tooltip title="vegan friendly">
        <img src={vegan} alt="vegan" width={"13px"} />
      </Tooltip>
    );
  } else if (category === "trending") {
    return (
      <Tooltip title="Hot pick">
        <img src={hot} alt="trending" width={"13px"} />
      </Tooltip>
    );
  } else if (category === "no sugar") {
    return (
      <Tooltip title="no added sugar">
        <img src={noSugar} alt="no added sugar" width={"13px"} />
      </Tooltip>
    );
  } else if (category === "nuts") {
    return (
      <Tooltip title="Contains nuts">
        <img src={peanut} alt="Contains nuts" width={"13px"} />
      </Tooltip>
    );
  }
  return
};

export default CategorizeComponent;
