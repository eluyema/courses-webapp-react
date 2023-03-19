import { Rating, Typography } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { CourseMeta, PreviewCourse } from "../../../../common/types/courses";
import {
  CardBody,
  CardImage,
  CardImageSection,
  CardRatingGrade,
  CardRatingSection,
  EclipsTitle,
  CardTitleSection,
  CourseCardWrapper,
  CardLessonsSection,
  CardSkillsSection,
  CourseLink,
} from "./CourseCard.styles";

interface CourseCard {
  course: PreviewCourse;
}

const CourseCard: FC<CourseCard> = ({ course }) => {
  const getSkills = (meta: null | CourseMeta) => {
    if (!meta || !meta.skills) {
      return "";
    }

    return meta.skills.reduce((accumulator, currentValue, index) => {
      if (index === 0) {
        return currentValue;
      }
      return accumulator + ", " + currentValue;
    }, "");
  };
  const skills = getSkills(course.meta);

  return (
    <CourseLink to={"/course/" + course.id} title={course.title}>
      <CourseCardWrapper elevation={5}>
        <CardImageSection>
          <CardImage src={course.previewImageLink + "/cover.webp"} />
        </CardImageSection>
        <CardBody>
          <CardTitleSection>
            <EclipsTitle variant="h4">{course.title}</EclipsTitle>
          </CardTitleSection>
          <CardLessonsSection>
            <Typography variant="body1">Lessons: {course.lessonsCount}</Typography>
          </CardLessonsSection>
          <CardRatingSection>
            <CardRatingGrade variant="subtitle2">{course.rating}</CardRatingGrade>
            <Rating value={course.rating} precision={0.2} size="small" readOnly />
          </CardRatingSection>
          {!!skills && (
            <CardSkillsSection>
              <EclipsTitle variant="body2">
                <b>Skills: </b>
                {skills}
              </EclipsTitle>
            </CardSkillsSection>
          )}
        </CardBody>
      </CourseCardWrapper>
    </CourseLink>
  );
};

export default CourseCard;
