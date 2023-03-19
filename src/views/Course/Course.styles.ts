import { styled } from "@mui/material";

const CoursePage = styled("div")({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CourseLayout = styled("div")(({ theme }) => ({
  width: "100%",
  padding: `0 ${theme.spacing(2.5)}`,
  marginTop: theme.spacing(0.25),
  display: "flex",
}));

const CourseContentSection = styled("div")({
  flex: 1,
});

const ButtonsSection = styled("div")(({ theme }) => ({
  width: "100%",
  padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
}));

export { CourseLayout, CoursePage, CourseContentSection, ButtonsSection };
