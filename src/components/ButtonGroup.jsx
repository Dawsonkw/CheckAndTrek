import { useItemsStore } from "../stores/itemsStore.js";
import Button from "./Button";

function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore((state) => state.markAllAsIncomplete);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark All As Complete
      </Button>
      <Button onClick={markAllAsIncomplete} buttonType="secondary">
        Mark All As Incomplete
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        Reset To Initial
      </Button>
      <Button onClick={removeAllItems} buttonType="secondary">
        Remove All Items
      </Button>
    </section>
  );
}

export default ButtonGroup;
