export function isPWA(): boolean {
  // iOS: window.navigator.standalone, Android/크롬: display-mode

  // 서버 사이드에서는 false 반환
  if (typeof window === "undefined") {
    return false;
  }

  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as any).standalone === true
  );
}
