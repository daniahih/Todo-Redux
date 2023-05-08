import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";

const RootLayout = () => {
  return (
    <>
      <MainNavBar />
      {/* to render the childs  */}
      <Outlet />
    </>
  );
};
export default RootLayout;
