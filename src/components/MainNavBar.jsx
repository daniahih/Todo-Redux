import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

//get all the neccessary methods from the useAuth0 Hook
const MainNavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
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
            <Link to="/edit/:id"> update todo</Link>
          </li>

          {isAuthenticated && (
            <li>
              <p> welcome {user.name} </p>
            </li>
          )}
          {isAuthenticated ? (
            <li>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default MainNavBar;
