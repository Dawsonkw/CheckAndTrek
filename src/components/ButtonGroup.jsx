import Button from "./Button";

function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark All As Complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark All As Incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset To Initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove All Items
      </Button>
    </section>
  );
}

export default ButtonGroup;
