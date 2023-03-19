import React, { memo, useContext, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { AlertContext } from "../../providers/AlertProvider/AlertProvider.provider";
import { usePreviewCourseById } from "../../hooks/usePreviewCourseById.hook";
import { useParams } from "react-router-dom";

const Course = () => {
  const { courseId } = useParams();
  const { course, isError } = usePreviewCourseById(courseId as string);

  const { showAlert } = useContext(AlertContext);

  useEffect(() => {
    window.document.title = "Course";
  }, []);

  useEffect(() => {
    if (course) {
      window.document.title = "Course | " + course.title;
    }
  }, [course]);

  useEffect(() => {
    if (isError) {
      showAlert("An error occurred while retrieving the course", "error");
    }
  }, [isError]);

  return (
    <Typography variant="h1">
      Course Page{" "}
      <Button
        variant="contained"
        onClick={() => {
          showAlert("Hello there!", "info");
        }}
      >
        Click me
      </Button>
    </Typography>
  );
};

export default memo(Course);
