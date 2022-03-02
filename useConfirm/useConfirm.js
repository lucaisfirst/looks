export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onConfirm !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
//useConfirm 이용할 때 message 입력하고, onConfirm에 해당하는 함수와 onCancel에 해당하는 함수 만들어서 연결하면 된다.
