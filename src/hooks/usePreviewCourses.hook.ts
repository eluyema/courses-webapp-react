import { AxiosError } from "axios";
import { useState } from "react";
import useSWR from "swr";
import { PreviewCourseEndpoints } from "../common/constants/endpoints/previewCourse.endpoints";
import { oneSecond } from "../common/constants/swr/swr.contants";
import { PreviewCoursesResponse } from "../common/types/courses";
import api from "../helpers/api/api.helper";
import { useToken } from "./useToken.hook";

const fetcher = async ([url, token]: [string, string, () => Promise<void>]) =>
  api
    .get<PreviewCoursesResponse>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

const initialData: PreviewCoursesResponse = {
  courses: [],
};

const usePreviewCourses = () => {
  const { token, isLoading: isTokenLoading, isError: isTokenError, refetchToken } = useToken();

  // this variable needed bacause argument retryCount in onErrorRetry is not working
  // because SWR refreshing value of retryCount to 1 every token update
  const [retryCount, setRetryCount] = useState(1);

  const { data, error, isLoading } = useSWR<PreviewCoursesResponse>(
    token ? [PreviewCourseEndpoints.previewCourses, token] : null,
    fetcher,
    {
      refreshInterval: oneSecond * 30,
      fallbackData: initialData,
      onErrorRetry: (error: AxiosError) => {
        if (error.response?.status !== 401) return;

        if (retryCount >= 4) return;

        setRetryCount((count) => count + 1);

        setTimeout(() => {
          refetchToken();
        }, 7000);
      },
    }
  );

  return {
    courses: data.courses,
    isLoading: isLoading || isTokenLoading,
    isError: !!error || !!isTokenError,
  };
};

export { usePreviewCourses };
