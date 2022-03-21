import { useTheme } from "./theme-context";
import { useLanguage } from "./localise-context";

export function Nav() {
  const { setTheme } = useTheme();
  const { setLanguage } = useLanguage();
  return (
    <div>
      <button
        onClick={() =>
          setTheme((theme) => (theme === "dark" ? "light" : "dark"))
        }
      >
        Toggle Mode
      </button>
      <button onClick={() => setLanguage("english")}>English</button>
      <button onClick={() => setLanguage("hindi")}>Hindi</button>
    </div>
  );
}
