import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to ensure the input is not empty
    if (!itemText) {
      alert("Item cannot be empty!");
      inputRef.current.focus();
      return;
    }

    // the spread operator is used to copy the previous items from the array and add the new item to the end using the setter function
    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus
      />
      <Button>Add to List</Button>
    </form>
  );
}

export default AddItemForm;
