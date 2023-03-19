import React, { FC, useEffect, useRef } from "react";
import Hls from "hls.js";
import { CourseVideoBlock, CourseVideoplayer, SkeletonVideoplayer } from "./CourseVideo.styles";

interface CourseVideoProps {
  src: string;
  isLoading: boolean;
}

const CourseVideo: FC<CourseVideoProps> = ({ isLoading, src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !src) {
      return;
    }

    const startTime = Number(localStorage.getItem(src) || 0);

    videoRef.current.currentTime = startTime;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        video.play();
      });

      const handleTimeUpdate = () => {
        const { currentTime } = video;
        const time = `${Math.floor(currentTime)}`;
        localStorage.setItem(src, time);
      };

      video.addEventListener("timeupdate", handleTimeUpdate);

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }
  }, [src]);

  return (
    <CourseVideoBlock>
      {isLoading ? (
        <SkeletonVideoplayer width="100%" variant="rectangular" animation="wave">
          <CourseVideoplayer />
        </SkeletonVideoplayer>
      ) : (
        <CourseVideoplayer ref={videoRef} controls />
      )}
    </CourseVideoBlock>
  );
};

export default CourseVideo;
