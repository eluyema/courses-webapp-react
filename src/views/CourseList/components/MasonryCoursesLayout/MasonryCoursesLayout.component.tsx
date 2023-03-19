import React, { FC } from "react";
import { PreviewCourse } from "../../../../common/types/courses";
import MassonryColumn from "./components/MassonryColumn/MassonryColumn.component";
import { MasonryCoursesContainer } from "./MasonryCoursesLayout.styles";
import { disributeCourses } from "./utils";

interface MasonryCoursesLayoutProps {
  courses: PreviewCourse[];
  isLoading: boolean;
}

const MasonryCoursesLayout: FC<MasonryCoursesLayoutProps> = ({ courses, isLoading }) => {
  const { first, second, third } = disributeCourses(courses);

  return (
    <MasonryCoursesContainer>
      <MassonryColumn showSkeleton={isLoading} skeletonCount={2} type="fat" courses={first} />
      <MassonryColumn showSkeleton={isLoading} skeletonCount={3} type="thin" courses={second} />
      <MassonryColumn showSkeleton={isLoading} skeletonCount={2} type="fat" courses={third} />
    </MasonryCoursesContainer>
  );
};

export default MasonryCoursesLayout;
