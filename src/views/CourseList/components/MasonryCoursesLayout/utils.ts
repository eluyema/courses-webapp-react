import { PreviewCourse } from "../../../../common/types/courses";

const disributeCourses = (courses: PreviewCourse[]) => {
  const first: PreviewCourse[] = [];
  const second: PreviewCourse[] = [];
  const third: PreviewCourse[] = [];

  courses.forEach((element, index) => {
    if (index % 3 === 2) {
      third.push(element);
    } else if (index % 3 === 1 || courses.length - 1 === index) {
      second.push(element);
    } else if (index % 3 === 0) {
      first.push(element);
    }
  });

  return { first, second, third };
};

export { disributeCourses };
