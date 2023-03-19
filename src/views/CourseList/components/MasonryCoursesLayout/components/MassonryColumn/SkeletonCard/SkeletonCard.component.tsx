import { Skeleton, Typography } from "@mui/material";
import React from "react";
import {
  SkeletonBody,
  SkeletonCardWrapper,
  SkeletonGrade,
  SkeletonImage,
  SkeletonLessons,
  SkeletonSkillRow,
  SkeletonTitle,
} from "./SkeletonCard.styles";

const SkeletonCard = () => {
  return (
    <SkeletonCardWrapper elevation={5}>
      <SkeletonImage animation="wave" variant="rectangular" />
      <SkeletonBody>
        <SkeletonTitle animation="wave"  />
        <SkeletonLessons animation="wave"  />
        <SkeletonGrade animation="wave"  />
        <SkeletonSkillRow animation="wave" />
        <SkeletonSkillRow animation="wave"/>
      </SkeletonBody>
    </SkeletonCardWrapper>
  );
};

export default SkeletonCard;
