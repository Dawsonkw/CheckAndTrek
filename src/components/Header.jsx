import Counter from "./Counter";
import Logo from "./Logo";

function Header({ totalNumberOfItems, numberOfItemsPacked }) {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        numberOfItemsPacked={numberOfItemsPacked}
      />
    </header>
  );
}

export default Header;
