import React from "react";
import Skeleton from "@mui/material/Skeleton";
const SkeletonIntro = () => {
  return (
    <div className="content-container">
      <div id="box-1">
        <div id="header-1">
          <Skeleton
            variant="text"
            sx={{ fontSize: "3rem" }}
            className="text-3xl"
          />
        </div>
        <div id="paragraph-1" className="mt-4 ps-10">
          <Skeleton variant="rectangular" sx={{width: "100%", height: "100px"}} />
        </div>
      </div>
      <div id="box-2">
        <div id="header-2">
          <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
        </div>
        <div id="paragraph-1" className="mt-4">
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonIntro;
