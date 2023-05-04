import { Link } from "react-router-dom";
const MainNavBar = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/"> To do home page</Link>
          </li>
          <li>
            <Link to="/add"> add TODo</Link>
          </li>
          <li>
            <Link to="/edit/:id"> Udate todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavBar;
