import { Paper, Skeleton, styled, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const LessonItemBlock = styled(Paper)<{ selected: boolean }>(({ theme, selected }) => ({
  width: "100%",
  height: "70px",
  minHeight: "70px",
  position: "relative",
  padding: `${theme.spacing(0.5)} ${theme.spacing(1.25)}`,
  backgroundColor: selected ? "#bcbcff" : "#fff",
  transition: "transform 0.1s ease-in-out, background-color 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: selected ? "#bcbcff" : "#e0e0ff",
    transform: "scale(1.01)",
  },
}));

const SkeletonItemBlock = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "70px",
  minHeight: "70px",
  padding: `${theme.spacing(0.2)} ${theme.spacing(1.25)}`,
}));

const LessonItemLocker = styled("div")<{ show: boolean }>(({ theme, show }) => ({
  display: show ? "block" : "none",
  width: "100%",
  height: "100%",
  position: "absolute",
  borderRadius: theme.shape.borderRadius,
  cursor: "default",
  top: 0,
  left: 0,
  backgroundColor: "black",
  opacity: "0.2",
}));

const LessonTitle = styled(Typography)({
  margin: 0,
});

const LessonDescription = styled(Typography)(({ theme }) => ({
  margin: 0,
  marginLeft: theme.spacing(0.15),
  display: "flex",
  alignItems: "center",
}));

const TimeIcon = styled(AccessTime)(({ theme }) => ({
  fontSize: "1rem",
  marginRight: theme.spacing(0.2),
}));

const SkeletonLessonTitle = styled(Skeleton)({
  width: "40%",
  height: "2rem",
});

const SkeletonLessonDescription = styled(Skeleton)({
  width: "20%",
  height: "1.4rem",
});

export {
  LessonItemBlock,
  LessonTitle,
  LessonDescription,
  TimeIcon,
  LessonItemLocker,
  SkeletonItemBlock,
  SkeletonLessonTitle,
  SkeletonLessonDescription,
};
