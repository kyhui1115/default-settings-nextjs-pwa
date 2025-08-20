import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsMobile(/iPhone|Android/i.test(window.navigator.userAgent));
  }, []);

  return isMobile;
};

export const useIsPad = () => {
  const [isPad, setIsPad] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const userAgent = window.navigator.userAgent;

    // iPad 감지
    const isIpad = /iPad|Macintosh/i.test(userAgent);

    // 안드로이드 태블릿 감지 (화면 크기 기반)
    const isAndroidTablet =
      /Android/i.test(userAgent) &&
      !/Mobile/i.test(userAgent) &&
      window.innerWidth >= 768;

    // 기타 태블릿 패턴 감지
    const isTablet = /Tablet|Tab/i.test(userAgent);

    setIsPad(isIpad || isAndroidTablet || isTablet);
  }, []);

  return isPad;
};
