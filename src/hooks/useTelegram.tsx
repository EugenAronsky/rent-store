const WebApp = window.Telegram.WebApp;

const useTelegram = () => {
  const onClose = () => WebApp.close();
  const onToggleButton = () => {
    if (WebApp.MainButton.isVisible) WebApp.MainButton.hide();
    else WebApp.MainButton.show();
  };
  return {
    onClose,
    onToggleButton,
    wabApp: WebApp,
    user: WebApp.initDataUnsafe?.user,
  };
};

export default useTelegram;
