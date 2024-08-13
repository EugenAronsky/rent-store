import { useState } from "react";

const WebApp = window.Telegram.WebApp;
const user = { ...window.Telegram.WebApp.initDataUnsafe };

function App() {
  const [count, setCount] = useState(0);
  console.log(WebApp, user);
  return (
    <main className="flex w-full h-full bg-telegram-black">
      <div>
        <div className="text-white">{JSON.stringify(user)}</div>
      </div>
    </main>
  );
}

export default App;
