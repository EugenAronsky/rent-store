import { Button } from "./components/ui/button";
import useTelegram from "./hooks/useTelegram";

function App() {
  const { onClose, onToggleButton } = useTelegram();
  return (
    <main className="flex w-full h-full bg-telegram-black">
      <Button onClick={onClose}>Close</Button>
      <Button onClick={onToggleButton}>Toggle</Button>
    </main>
  );
}

export default App;
