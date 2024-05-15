import { Box, Skeleton } from "@mui/material";
import React from "react";

const SkeletonGroup = (props) => {
  let skeletonArr = [];
  for (let i = 0; i < props.count; i++) {
    skeletonArr.push(i);
  }

  return (
    <Box
      display={"flex"}
      flexDirection={props.flexDirection || "column"}
      gap={"20px"}
    >
      {skeletonArr.map(() => (
        <Skeleton
          width={props.width}
          height={props.height}
          variant={props.variant || "rounded"}
        />
      ))}
    </Box>
  );
};

export default SkeletonGroup;
