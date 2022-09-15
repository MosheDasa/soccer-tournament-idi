import { Link, Outlet } from "react-router-dom";
import Footer from "../libs/components/footer/footer";
import Header from "../libs/components/header/header";

function Layout() {
  return (
    <>
      <Header></Header>
      <nav>
        <ul>
          <li>
            <Link to="/">PointsTable</Link>
          </li>
          <li>
            <Link to="/teamroster">teamroster</Link>
          </li>
          <li>
            <Link to="/scoreboard">scoreboard</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default Layout;
