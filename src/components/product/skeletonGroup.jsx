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
      flexDirection={props.type === "box" ? "row" : "column"}
      justifyContent={"space-evenly"}
      whiteSpace={"nowrap"}
      gap={"20px"}
    >
      {skeletonArr.map(() => (
        <Skeleton
          width={props.type === "box" ? "clamp(80px, 42vw, 250px)" : "100%"}
          height={props.type === "box" ? "clamp(300px, 50vw, 350px)" : "100px"}
          variant="rounded"
        />
      ))}
    </Box>
  );
};

export default SkeletonGroup;
