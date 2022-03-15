export const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
  };
  return { element, triggerFull, exitFull };
};
//callback 함수 받아서 만든 모델 여기에 모든 브라우저에서 호환되게 조건 걸어야 됨.