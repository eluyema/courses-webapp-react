import React, { memo, useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { AlertContext } from "../../providers/AlertProvider/AlertProvider.provider";
import { usePreviewCourseById } from "../../hooks/usePreviewCourseById.hook";
import { useParams } from "react-router-dom";
import { ButtonsSection, CourseContentSection, CourseLayout, CoursePage } from "./Course.styles";
import LessonsList from "./components/LessonsList/LessonsList.component";
import CourseVideo from "./components/CourseVideo/CourseVideo.component";
import { NormalizedLink } from "../../ui/NormalizedLink/NormalizedLink.ui";
import CourseInfo from "./components/CourseInfo/CourseInfo.component";
import SkeletonCourseInfo from "./components/CourseInfo/SkeletonCourseInfo.styles";
import { PreviewCourseResponse } from "../../common/types/courses";

const Course = () => {
  const { courseId } = useParams();
  const { course, isError, isLoading } = usePreviewCourseById(courseId as string);

  const [selectedLessonId, setSelectedLessonId] = useState("");

  const { showAlert } = useContext(AlertContext);

  useEffect(() => {
    window.document.title = "Course";
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <CoursePage>
      <ButtonsSection>
        <NormalizedLink to="/">
          <Button variant="contained">Back to courses</Button>
        </NormalizedLink>
      </ButtonsSection>
      <CourseLayout>
        <CourseContentSection>
          <CourseVideo
            isLoading={isLoading || isError}
            src={course?.lessons.find(({ id }) => id === selectedLessonId)?.link || ""}
          />

          {!course && (isLoading || isError) ? (
            <SkeletonCourseInfo />
          ) : (
            <CourseInfo course={course as PreviewCourseResponse} />
          )}
        </CourseContentSection>
        <LessonsList
          isLoading={isLoading || isError}
          courseId={courseId as string}
          selectedLessonId={selectedLessonId}
          setSelectedLessonId={setSelectedLessonId}
          lessons={course ? course.lessons : []}
        />
      </CourseLayout>
    </CoursePage>
  );
};

export default memo(Course);
