import React, { FC } from "react";
import {
  SkeletonItemBlock,
  SkeletonLessonDescription,
  SkeletonLessonTitle,
} from "./LessonItem.styles";

const SkeletonLessonItem: FC = () => {
  return (
    <SkeletonItemBlock>
      <SkeletonLessonTitle animation="wave" />
      <SkeletonLessonDescription animation="wave" />
    </SkeletonItemBlock>
  );
};

export default SkeletonLessonItem;
