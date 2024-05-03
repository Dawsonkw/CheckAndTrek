import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { value: "default", label: "Sort By Default" },
  { label: "Sort By Packed", value: "packed" },
  { label: "Sort By Unpacked", value: "unpacked" },
  { label: "Sort Alphabetically", value: "alphabetical" },
];

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const [sortBy, setSortBy] = useState("default");
  
  // Sort items based on the selected sorting option
  //copy the original items array and sort it based on the selected sorting option
  // useMemo makes it so that the component only re-renders when the sortedItems array changes
  //Refactored the sorting logic into a separate function called compareFunction,
  
  //explanation for future projects:
  // switch statement: The switch statement is a control flow statement in JS used to execute one block of code from multiple possibilities. It evaluates an expression (sortBy in this case) and compares it with multiple cases. When a match is found, the corresponding block of code is executed.
  
  // case clauses: Each case clause represents a possible value of the expression being evaluated (sortBy in this case). When the value of sortBy matches the value specified in a case clause, the corresponding block of code is executed.
  
  // default clause: This is like an "else" statement. If none of the case clauses match the value of the expression (sortBy), the code inside the default block is executed.
  
  const sortedItems = useMemo(() => {
    const compareFunction = (a, b) => {
      switch (sortBy) {
        case "packed":
          return b.packed - a.packed;
        case "unpacked":
          return a.packed - b.packed;
        case "alphabetical":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    };
  
    return [...items].sort(compareFunction);
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label onChange={() => onToggleItem(item.id)}>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

