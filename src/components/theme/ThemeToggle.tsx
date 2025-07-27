import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";
import "./ThemeToggle.scss";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full"
    >
      <Sun
        className={`theme-toggle__icon theme-toggle__icon--sun${
          theme === "dark" ? " theme-toggle__icon--hidden" : ""
        }`}
      />
      <Moon
        className={`theme-toggle__icon theme-toggle__icon--moon${
          theme === "light" ? " theme-toggle__icon--hidden" : ""
        }`}
      />
      {/* <span className="sr-only">Toggle theme</span> */}
    </Button>
  );
}
