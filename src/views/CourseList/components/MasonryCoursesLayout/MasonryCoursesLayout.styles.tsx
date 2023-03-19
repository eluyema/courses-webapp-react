import { styled } from "@mui/material";

const MasonryCoursesContainer = styled("div")(({ theme }) => ({
  margin: "0 auto",
  width: theme.breakpoints.values.lg,
  padding: theme.spacing(2.5),
  display: "flex",
  gap: theme.spacing(1.5),
}));

export { MasonryCoursesContainer };
