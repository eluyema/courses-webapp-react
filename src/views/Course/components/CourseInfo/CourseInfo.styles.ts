import { Skeleton, styled, Typography } from "@mui/material";

const CourseInfoSection = styled("div")(({ theme }) => ({
  width: "100%",
  padding: `0 ${theme.spacing(2)}`,
  paddingBottom: theme.spacing(4),
}));

const CourseTitleBlock = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(0.5),
}));

const CourseDescriptionBlock = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(0.25),
}));

const CourseRatingSection = styled("div")({
  display: "flex",
  alignItems: "center",
});

const CourseRatingGrade = styled(Typography)(({ theme }) => ({
  color: "#b4690e",
  margin: 0,
  marginRight: theme.spacing(0.25),
}));

const CourseLessonsCountBlock = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(0.25),
}));

const CourseTimeBlock = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(0.15),
}));

const CourseDateBlock = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(0.15),
}));

const CourseTagsBlock = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(0.2),
  display: "flex",
  gap: theme.spacing(0.6),
  flexWrap: "wrap",
}));

const SkeletonCourseTitle = styled(Skeleton)(({ theme }) => ({
  height: "4rem",
  width: "90%",
  marginTop: theme.spacing(0.2),
}));

const ShortDescriptionRow = styled(Skeleton)(({ theme }) => ({
  height: "1.5rem",
  width: "20%",
  marginTop: theme.spacing(0.1),
}));

const MediumDescriptionRow = styled(Skeleton)(({ theme }) => ({
  height: "2rem",
  width: "40%",
  marginTop: theme.spacing(0.1),
}));

const LongDescriptionRow = styled(Skeleton)(({ theme }) => ({
  height: "2rem",
  width: "80%",
  marginTop: theme.spacing(0.15),
}));

export {
  CourseInfoSection,
  CourseTagsBlock,
  CourseTitleBlock,
  CourseDescriptionBlock,
  CourseRatingSection,
  CourseRatingGrade,
  CourseLessonsCountBlock,
  CourseTimeBlock,
  CourseDateBlock,
  SkeletonCourseTitle,
  ShortDescriptionRow,
  MediumDescriptionRow,
  LongDescriptionRow,
};
