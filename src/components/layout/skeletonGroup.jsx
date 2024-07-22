import { Box, Skeleton } from "@mui/material";
import React from "react";

const SkeletonGroup = ({
  count,
  variant,
  width,
  height,
  flexDirection,
  flexWrap,
  style,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={flexDirection || "column"}
      flexWrap={flexWrap}
      gap={"20px"}
    >
      {Array.from({ length: count }).map(() => (
        <Skeleton
          width={width}
          height={height}
          variant={variant || "rounded"}
          sx={style}
        />
      ))}
    </Box>
  );
};

export default SkeletonGroup;
