import { PreviewCourse } from "../../common/types/courses";

const getCoursesForPage = (courses: PreviewCourse[], page: number, coursesPerPage: number) => {
  const startIndex = (page - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  return courses.slice(startIndex, endIndex);
};

export { getCoursesForPage };
