function Counter({ totalNumberOfItems, numberOfItemsPacked }) {
  return (
    <p>
      <span style={{ fontWeight: numberOfItemsPacked > 0 ? 'bold' : 'normal' }}>
        {numberOfItemsPacked}
      </span> / <span style={{ fontWeight: numberOfItemsPacked === totalNumberOfItems ? 'bold' : 'normal' }}>{totalNumberOfItems}</span> items packed
    </p>
  );
}

export default Counter;
