import { styled } from "@mui/material";

const CourseListPage = styled("div")({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const PaginationBlock = styled("div")<{ visible: boolean }>(({ theme, visible }) => ({
  width: "100%",
  display: visible ? "flex" : "none",
  justifyContent: "center",
  marginTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

export { CourseListPage, PaginationBlock };
