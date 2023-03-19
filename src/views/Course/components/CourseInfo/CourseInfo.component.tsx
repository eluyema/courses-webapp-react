import { Chip, Rating, Typography } from "@mui/material";
import React, { FC } from "react";
import { CourseMeta, PreviewCourseResponse } from "../../../../common/types/courses";
import { getHoursAndMinutes } from "../../../../helpers/time/getHoursAndMinutes.helper";
import EclipsTitle from "../../../../ui/EcliseTitle/EcliseTitle.ui";
import {
  CourseDateBlock,
  CourseDescriptionBlock,
  CourseInfoSection,
  CourseLessonsCountBlock,
  CourseRatingGrade,
  CourseRatingSection,
  CourseTagsBlock,
  CourseTimeBlock,
  CourseTitleBlock,
} from "./CourseInfo.styles";

interface CourseInfoProps {
  course: PreviewCourseResponse;
}

const CourseInfo: FC<CourseInfoProps> = ({ course }) => {
  const getFormattedDate = (strDate: string) => {
    const date = new Date(strDate);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  const getTags = (meta: CourseMeta) => {
    if (!meta.skills || meta.skills.length === 0) {
      return [];
    }

    return meta.skills.map((skill) => <Chip label={skill} key={skill} />);
  };

  const { hours, minutes } = getHoursAndMinutes(course.duration);

  return (
    <CourseInfoSection>
      <CourseTitleBlock>
        <EclipsTitle variant="h2">{course.title}</EclipsTitle>
      </CourseTitleBlock>
      <CourseDateBlock>
        <Typography variant="body1">{getFormattedDate(course.launchDate)} </Typography>
      </CourseDateBlock>
      <CourseTagsBlock>{getTags(course.meta)}</CourseTagsBlock>
      <CourseDescriptionBlock>
        <Typography variant="subtitle1">{course.description}</Typography>
      </CourseDescriptionBlock>
      <CourseRatingSection>
        <CourseRatingGrade variant="subtitle1">{course.rating}</CourseRatingGrade>
        <Rating value={course.rating} precision={0.2} readOnly />
      </CourseRatingSection>
      <CourseLessonsCountBlock>
        <Typography variant="subtitle2">Lessons: {course.lessons.length || 0}</Typography>
      </CourseLessonsCountBlock>
      <CourseTimeBlock>
        <Typography variant="subtitle2">
          Course duration: {hours} Hours {minutes} minutes
        </Typography>
      </CourseTimeBlock>
    </CourseInfoSection>
  );
};

export default CourseInfo;
