import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 bg-muted/40">
      <h1 className="text-2xl font-bold">Todo App</h1>
      <Button
        variant="outline"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </header>
  );
};

export default Header;