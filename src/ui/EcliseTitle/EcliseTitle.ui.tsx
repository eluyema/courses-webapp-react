import { styled, Typography } from "@mui/material";

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

export default EclipsTitle;
