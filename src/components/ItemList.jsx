import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

const sortingOptions = [
  { value: "default", label: "Sort By Default" },
  { label: "Sort By Packed", value: "packed" },
  { label: "Sort By Unpacked", value: "unpacked" },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  // Sort items based on the selected sorting option
  //copy the original items array and sort it based on the selected sorting option
  // useMemo makes it so that the component only re-renders when the sortedItems array changes
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        } else if (sortBy === "unpacked") {
          return a.packed - b.packed;
        } else {
          return 0;
        }
      }),
    [items, sortBy]
  );

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
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
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
