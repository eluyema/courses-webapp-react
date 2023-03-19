import { Paper, Skeleton, styled } from "@mui/material";

const SkeletonCardWrapper = styled(Paper)({
  width: "100%",
  height: "100%",
});

const SkeletonBody = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(0.25)} ${theme.spacing(0.75)}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
}));

const SkeletonImage = styled(Skeleton)(({ theme }) => ({
  height: '45%',
  width: '100%',
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
}));

const SkeletonTitle = styled(Skeleton)(({ theme }) => ({
  width: "85%",
  height: "2rem",
}));

const SkeletonLessons = styled(Skeleton)(({ theme }) => ({
  width: "25%",
  height: "1.5rem",
  marginTop: theme.spacing(0.1),
}));

const SkeletonGrade = styled(Skeleton)(({ theme }) => ({
  width: "35%",
  height: "1.6rem",
  marginTop: theme.spacing(0.1),
}));

const SkeletonSkillRow = styled(Skeleton)(({ theme }) => ({
  width: "90%",
  height: "1.2rem",
}));

export {
  SkeletonCardWrapper,
  SkeletonTitle,
  SkeletonGrade,
  SkeletonLessons,
  SkeletonBody,
  SkeletonSkillRow,
  SkeletonImage
};
