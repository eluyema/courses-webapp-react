import { Paper, styled } from "@mui/material";

const CourseListBlock = styled(Paper)(({ theme }) => ({
  width: "500px",
  height: "85vh",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.45),
  padding: `${theme.spacing(0.5)}`,
  paddingLeft: theme.spacing(0.8),
  paddingRight: theme.spacing(0.4),
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0.4em",
    height: "0.4em",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#ccc",
  },
  scrollbarWidth: "thin",
  scrollbarColor: "#ccc transparent",
}));

export { CourseListBlock };
