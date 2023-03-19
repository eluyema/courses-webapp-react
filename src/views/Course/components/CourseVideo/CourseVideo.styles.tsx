import { Skeleton, styled } from "@mui/material";

const CourseVideoBlock = styled("div")(({ theme }) => ({
  width: "100%",
  padding: `0 ${theme.spacing(2)}`,
}));

const CourseVideoplayer = styled("video")({
  width: "100%",
});

const SkeletonVideoplayer = styled(Skeleton)({
  width: "100%",
});

export { CourseVideoBlock, CourseVideoplayer, SkeletonVideoplayer };
