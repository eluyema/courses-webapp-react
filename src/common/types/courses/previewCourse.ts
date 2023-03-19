import { CourseMeta } from "./courseMeta";

interface PreviewCourse {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: null | CourseMeta;
}

export type { PreviewCourse };
