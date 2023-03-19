import React, { FC } from "react";
import { PreviewCourse } from "../../../../../../common/types/courses";
import CourseCard from "../../../CourseCard/CourseCard.component";
import { CoursesColumn, MassonryCourseCard } from "./MassonryColumn.styles";
import SkeletonCard from "./SkeletonCard/SkeletonCard.component";
import shortid from "shortid";

interface MassonryColumnProps {
  courses: PreviewCourse[];
  showSkeleton: boolean;
  skeletonCount: number;
  type: "thin" | "fat";
}

const MassonryColumn: FC<MassonryColumnProps> = ({
  courses,
  type,
  showSkeleton,
  skeletonCount,
}) => {
  const getSkeletons = (num: number) => {
    const skeletons = [];
    for (let i = 0; i < num; i++) {
      skeletons.push(
        <MassonryCourseCard type={type} key={shortid.generate()}>
          <SkeletonCard />
        </MassonryCourseCard>
      );
    }
    return skeletons;
  };

  return (
    <CoursesColumn>
      {!showSkeleton
        ? courses.map((course) => {
            return (
              <MassonryCourseCard type={type} key={course.id}>
                <CourseCard course={course} />
              </MassonryCourseCard>
            );
          })
        : getSkeletons(skeletonCount)}
    </CoursesColumn>
  );
};

export default MassonryColumn;
