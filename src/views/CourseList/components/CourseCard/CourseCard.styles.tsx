import { Paper, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CourseCardWrapper = styled(Paper)({
  height: "100%",
  width: "100%",
});

const CardImageSection = styled("div")({
  width: "100%",
  height: "45%",
});

const CardImage = styled("div")<{ src: string }>(({ src, theme }) => ({
  height: "100%",
  width: "100%",
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "inset 0px -10px 10px -10px rgba(0, 0, 0, 0.5)",
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
}));

const CardBody = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(0.25)} ${theme.spacing(0.75)}`,
}));

const CardTitleSection = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(0.35),
}));

const EclipsTitle = styled(Typography)`
  display: -moz-box;
  display: -webkit-box;
  display: box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
  line-clamp: 2;
`;

const CardRatingSection = styled("div")({
  display: "flex",
  alignItems: "center",
});

const CardRatingGrade = styled(Typography)(({ theme }) => ({
  color: "#b4690e",
  margin: 0,
  marginRight: theme.spacing(0.25),
}));

const CardSkillsSection = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(0.5),
}));

const CardLessonsSection = styled("div")({});

const CourseLink = styled(Link)({
  textDecoration: "none",
});

export {
  CourseCardWrapper,
  CardImageSection,
  CardImage,
  CardBody,
  EclipsTitle,
  CardTitleSection,
  CardRatingSection,
  CardRatingGrade,
  CardLessonsSection,
  CardSkillsSection,
  CourseLink,
};
