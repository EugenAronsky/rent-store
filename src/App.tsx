import { Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import useTelegram from "./hooks/useTelegram";
import Form from "./pages/Form";
import Recommendations from "./pages/Recommendations";

function App() {
  const { onClose, onToggleButton, user } = useTelegram();
  return (
    <main className="flex w-full h-full bg-telegram-black">
      <h1 className="text-telegram-white">{user?.username}</h1>
      <Button onClick={onClose}>Close</Button>
      <Button onClick={onToggleButton}>Toggle</Button>
      <Routes>
        <Route index element={<Recommendations />} />
        <Route element={<Form />} />
      </Routes>
    </main>
  );
}

export default App;
