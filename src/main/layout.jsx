import { Outlet } from "react-router-dom";
import Footer from "../libs/components/footer/footer";
import Header from "../libs/components/header/header";

function Layout() {
 
    return (
        <>
        <div>
        <Header/> 
          <Outlet />
          <Footer/>
        </div>
        
        </>
      )

}

export default Layout;