const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};
//useConfirm 이용할 때 message 입력하고, callback함수와 rejection 함수 만들어서 연결하면 된다.
