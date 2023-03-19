import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Pagination } from "@mui/material";
import scrollIntoView from "scroll-into-view-if-needed";
import { usePreviewCourses } from "../../hooks/usePreviewCourses.hook";
import { AlertContext } from "../../providers/AlertProvider/AlertProvider.provider";
import MasonryCoursesLayout from "./components/MasonryCoursesLayout/MasonryCoursesLayout.component";
import { CourseListPage, PaginationBlock } from "./CourseList.styles";
import { courserPerPage } from "./constants";
import { getCoursesForPage } from "./utils";

const CourseList = () => {
  const { courses, isLoading, isError } = usePreviewCourses();
  const { showAlert } = useContext(AlertContext);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(courses.length / courserPerPage);

  const sortedCourses = useMemo(() => {
    if (courses.length === 0) {
      return [];
    }

    return courses.sort((first, second) => {
      const dateFirst = new Date(first.launchDate);
      const dateSecond = new Date(second.launchDate);

      return dateFirst.getTime() - dateSecond.getTime();
    });
  }, [courses]);

  const selectedCourses = getCoursesForPage(sortedCourses, page, courserPerPage);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    window.document.title = "Prewiew courses";
  }, []);

  useEffect(() => {
    if (!paginationRef.current) {
      return;
    }
    scrollIntoView(paginationRef.current, {
      scrollMode: "if-needed",
      block: "nearest",
      inline: "nearest",
    });
  }, [page]);

  useEffect(() => {
    if (isError) {
      showAlert("An error occurred while retrieving the list of preview courses", "error");
    }
  }, [isError]);

  return (
    <CourseListPage>
      <MasonryCoursesLayout courses={selectedCourses} isLoading={isLoading || isError} />
      <PaginationBlock ref={paginationRef} visible={!(isError || isLoading)}>
        <Pagination count={pageCount} size="large" page={page} onChange={handleChangePage} />
      </PaginationBlock>
    </CourseListPage>
  );
};

export default CourseList;
