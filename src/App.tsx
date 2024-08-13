const WebApp = window.Telegram.WebApp;
const user = { ...window.Telegram.WebApp.initDataUnsafe };

function App() {
  console.log(WebApp, user);
  return (
    <main className="flex w-full h-full bg-telegram-black">
      <div className="text-white">{JSON.stringify(user)}</div>
    </main>
  );
}

export default App;
