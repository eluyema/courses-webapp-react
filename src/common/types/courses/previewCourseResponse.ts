import { CourseMeta } from "./courseMeta";
import { Lesson } from "./lesson";

interface PreviewCourseResponse {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  previewImageLink: string;
  rating: number;
  meta: CourseMeta;
  containsLockedLessons: boolean;
  lessons: Lesson[];
}

export type { PreviewCourseResponse };
