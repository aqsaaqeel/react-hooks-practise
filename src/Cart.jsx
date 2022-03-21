import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";
import { useLanguage } from "./localise-context";

const languageLib = {
  english: {
    cart: "Items in cart"
  },
  hindi: {
    cart: "कार्ट में आइटम"
  }
};

export function Cart() {
  const { items } = useCart();
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <h1 style={{ color: theme === "light" ? "black" : "white" }}>
      {" "}
      {`${languageLib[language]["cart"]} ${items}`}{" "}
    </h1>
  );
}
