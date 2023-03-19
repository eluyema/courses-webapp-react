import { styled } from "@mui/material";
import { ReactNode } from "react";

const CoursesColumn = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
}));

interface MassonryPreviewCourseProps {
  type: "thin" | "fat";
  children: ReactNode;
}

const MassonryCourseCard = styled("div")<MassonryPreviewCourseProps>((props) => ({
  height: props.type === "thin" ? "340px" : "400px",
}));

export { CoursesColumn, MassonryCourseCard };
