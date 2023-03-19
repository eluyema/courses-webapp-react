import { AxiosError } from "axios";
import { useState } from "react";
import useSWR from "swr";
import { PreviewCourseEndpoints } from "../common/constants/endpoints/previewCourse.endpoints";
import { oneSecond } from "../common/constants/swr/swr.contants";
import { PreviewCourseResponse } from "../common/types/courses";
import api from "../helpers/api/api.helper";
import { useToken } from "./useToken.hook";

const fetcher = ([url, token]: [string, string]) =>
  api
    .get<PreviewCourseResponse>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

const usePreviewCourseById = (id: string) => {
  const { token, isLoading: isTokenLoading, isError: isTokenError, refetchToken } = useToken();

  // this variable needed bacause argument retryCount in onErrorRetry is not working
  // because SWR refreshing value of retryCount to 1 every token update
  const [retryCount, setRetryCount] = useState(1);

  const { data, error, isLoading } = useSWR(
    token ? [PreviewCourseEndpoints.previewCourseById.replace(":courseId", id), token] : null,
    fetcher,
    {
      refreshInterval: oneSecond * 30,
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
    course: data,
    isLoading: isLoading || isTokenLoading,
    isError: !!error || !!isTokenError,
  };
};

export { usePreviewCourseById };
