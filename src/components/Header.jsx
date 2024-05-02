import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Datetime from "./Datetime";

function Header() {
const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Counter
      numberOfItemsPacked={items.filter((item) => item.packed).length}
      totalNumberOfItems={items.length}
      />
      <Datetime />
    </header>
  );
}

export default Header;
