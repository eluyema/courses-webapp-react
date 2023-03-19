import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Course from "../../views/Course/Course.view";
import CourseList from "../../views/CourseList/CourseList.view";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="course/:courseId" element={<Course />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
