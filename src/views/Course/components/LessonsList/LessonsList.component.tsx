import React, { FC, useEffect } from "react";
import { Lesson } from "../../../../common/types/courses";
import LessonsItem from "./LessonItem/LessonItem.component";
import SkeletonLessonItem from "./LessonItem/SkeletonLessonItem.component";
import { CourseListBlock } from "./LessonsList.styles";

interface LessonsListProps {
  isLoading: boolean;
  lessons: Lesson[];
  setSelectedLessonId: (id: string) => void;
  selectedLessonId: string;
  courseId: string;
}

const LessonsList: FC<LessonsListProps> = ({
  lessons,
  selectedLessonId,
  courseId,
  isLoading,
  setSelectedLessonId,
}) => {
  useEffect(() => {
    const selectedLessonId = localStorage.getItem(`selected-id-${courseId}`) || "";

    if (selectedLessonId) {
      setSelectedLessonId(selectedLessonId);
    } else {
      for (const lesson of lessons) {
        if (lesson.status !== "locked") {
          setSelectedLessonId(lesson.id);
          break;
        }
      }
    }
  }, [courseId, lessons]);

  const handleSelectLesson = (id: string) => {
    localStorage.setItem(`selected-id-${courseId}`, id);

    setSelectedLessonId(id);
  };

  return (
    <CourseListBlock elevation={3}>
      {lessons.map((lesson) => (
        <LessonsItem
          selected={lesson.id === selectedLessonId}
          handleSelectLesson={handleSelectLesson}
          key={lesson.id}
          lesson={lesson}
        />
      ))}
      {isLoading && (
        <>
          <SkeletonLessonItem />
          <SkeletonLessonItem />
          <SkeletonLessonItem />
          <SkeletonLessonItem />
        </>
      )}
    </CourseListBlock>
  );
};

export default LessonsList;
