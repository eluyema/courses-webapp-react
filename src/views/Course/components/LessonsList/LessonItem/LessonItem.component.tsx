import React, { FC, useEffect, useRef } from "react";
import { Lesson } from "../../../../../common/types/courses";
import {
  LessonDescription,
  LessonItemBlock,
  LessonItemLocker,
  LessonTitle,
  TimeIcon,
} from "./LessonItem.styles";
import scrollIntoView from "scroll-into-view-if-needed";
import { getHoursAndMinutes } from "../../../../../helpers/time/getHoursAndMinutes.helper";

interface LessonsListItemProps {
  lesson: Lesson;
  selected: boolean;
  handleSelectLesson: (id: string) => void;
}

const LessonsItem: FC<LessonsListItemProps> = ({ lesson, selected, handleSelectLesson }) => {
  const locked = lesson.status === "locked" || lesson.type !== "video";
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) {
      return;
    }
    if (selected) {
      scrollIntoView(itemRef.current, {
        scrollMode: "if-needed",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [selected]);

  const handleClick = () => {
    if (!locked) {
      handleSelectLesson(lesson.id);
    }
  };

  return (
    <LessonItemBlock ref={itemRef} selected={selected} onClick={handleClick} elevation={4}>
      <LessonTitle variant="h5">{lesson.title}</LessonTitle>
      <LessonDescription variant="body1">
        <TimeIcon />
        {getHoursAndMinutes(lesson.duration).minutes} minutes
      </LessonDescription>
      <LessonItemLocker show={locked} />
    </LessonItemBlock>
  );
};

export default LessonsItem;
