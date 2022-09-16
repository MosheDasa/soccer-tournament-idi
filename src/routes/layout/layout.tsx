import { Box, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../libs/components/footer/footer";
import Header from "../../libs/components/header/header";

function Layout() {
  return (
    <>
      <Header></Header>
      <Container fixed>
        <nav>
          <ul>
            <li>
              <Link to="/adminScreen">adminScreen</Link>
            </li>
            <li>
              <Link to="/refereeScreen">refereeScreen</Link>
            </li>
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
      </Container>

      <Footer></Footer>
    </>
  );
}

export default Layout;
