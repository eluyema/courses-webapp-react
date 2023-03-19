interface localCourseData {
  timings?: {
    [lessonId: string]: number;
  };
  selectedLessonId?: string;
}

export type { localCourseData };
