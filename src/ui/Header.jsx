import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast Pizza Co.</Link>
      <SearchOrder />

      <p>Turja</p>
    </header>
  );
}

export default Header;
