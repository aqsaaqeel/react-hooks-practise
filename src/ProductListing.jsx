import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";
import { useLanguage } from "./localise-context";

const languageLib = {
  english: {
    product: "Product",
    buttonText: "Add To Cart"
  },
  hindi: {
    product: "उत्पाद",
    buttonText: "कार्ट में डालो"
  }
};

export function ProductListing() {
  const { addingToCart } = useCart();
  const { theme } = useTheme();
  const { language } = useLanguage();

  return ["1", "2", "3", "4"].map((item) => (
    <div key={item}>
      <h2 style={{ color: theme === "light" ? "black" : "white" }}>
        {`${languageLib[language]["product"]} ${item}`}
      </h2>
      <button
        onClick={addingToCart}
      >{`${languageLib[language]["buttonText"]}`}</button>
    </div>
  ));
}
