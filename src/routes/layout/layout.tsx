import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../../libs/components/footer/footer";
import Header from "../../libs/components/header/header";

function Layout() {
  return (
    <>
      <Header></Header>

      <Container fixed>
        <Outlet />
      </Container>

      <Footer></Footer>
    </>
  );
}

export default Layout;
