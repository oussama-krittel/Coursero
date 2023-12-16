import Logo from "./logo";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-blue-500 border-b border-gray-600">
      <Link to="/">
        <Logo color="white" />
      </Link>
    </header>
  );
}
export default Header;
