import React, { FC } from "react";
import {
  CourseInfoSection,
  SkeletonCourseTitle,
  ShortDescriptionRow,
  LongDescriptionRow,
  MediumDescriptionRow,
} from "./CourseInfo.styles";

const SkeletonCourseInfo: FC = () => {
  return (
    <CourseInfoSection>
      <SkeletonCourseTitle animation="wave" />
      <MediumDescriptionRow animation="wave" />
      <LongDescriptionRow animation="wave" />
      <LongDescriptionRow animation="wave" />
      <ShortDescriptionRow animation="wave" />
      <MediumDescriptionRow animation="wave" />
    </CourseInfoSection>
  );
};

export default SkeletonCourseInfo;
