import { Container } from "@mui/material";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../libs/components/footer/footer";
import Header from "../../libs/components/header/header";
import LoaderPage from "../../libs/components/loader-page/loader-page";

function Layout() {
  return (
    <>
      <Suspense fallback={<LoaderPage isShowLoader={true} />}>
        <LoaderPage isShowLoader={false}></LoaderPage>
        <div>
          <Header></Header>
          <Container dir="rtl" fixed>
            <Outlet />
          </Container>

          <Footer></Footer>
        </div>
      </Suspense>
    </>
  );
}

export default Layout;
