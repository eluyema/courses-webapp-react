import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { env } from "../../common/constants/env/env.constants";
import Course from "../../views/Course/Course.view";
import CourseList from "../../views/CourseList/CourseList.view";

const Routing = () => {
  const isProd = process.env.NODE_ENV === "production";

  const basename = isProd ? env.prodBasename : "/";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="course/:courseId" element={<Course />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
