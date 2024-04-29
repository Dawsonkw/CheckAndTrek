import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";

function Header() {
const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Counter
      numberOfItemsPacked={items.filter((item) => item.packed).length}
      totalNumberOfItems={items.length}
      />
    </header>
  );
}

export default Header;
