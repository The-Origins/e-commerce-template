import { Box, Skeleton } from "@mui/material";
import React from "react";

const SkeletonGroup = ({count, variant, width, height, flexDirection, flexWrap,}) => {
  let skeletonArr = [];
  for (let i = 0; i < count; i++) {
    skeletonArr.push(i);
  }

  return (
    <Box
      display={"flex"}
      flexDirection={flexDirection || "column"}
      flexWrap={flexWrap}
      gap={"20px"}
    >
      {skeletonArr.map(() => (
        <Skeleton
          width={width}
          height={height}
          variant={variant || "rounded"}
        />
      ))}
    </Box>
  );
};

export default SkeletonGroup;
