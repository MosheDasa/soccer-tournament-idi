import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApiAuth } from "../../services/api-auth";
import { navItems } from "../../models/header-nav-Items";
import { useLocation } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

export default function HeaderAppBar() {
  const location = useLocation();
  const { permissionUser, logout } = useApiAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");

  const TitleHeader = "טורניר כדורגל  - ביטוח ישיר";

  useEffect(() => {
    setActiveLink(location.pathname.replace("/", ""));
  }, [location]);

  const handleClickLink = (path: string) => {
    if (path === "logout") {
      logout();
      path = "";
    }
    navigate("/" + path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItemsAfterFilter = navItems.filter(
    (x) => x.permission.indexOf(permissionUser) !== -1
  );

  const navItemsAfterFilterMobile = [...navItems]
    .reverse()
    .filter((x) => x.permission.indexOf(permissionUser) !== -1);

  const isLoginOrLogout = (path: string) => {
    return path === "login" || path === "logout";
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {TitleHeader}
      </Typography>
      <Divider />
      <List>
        {navItemsAfterFilterMobile.map((item) => (
          <ListItem key={item.path} disablePadding>
            {/* <Link to='/adminScreen'>adminScreen</Link> */}
            <ListItemButton
              onClick={(event) => handleClickLink(item.path)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                style={{
                  textDecoration:
                    activeLink === item.path ? "underline" : " none",
                }}
                primary={
                  isLoginOrLogout(item.path)
                    ? " | " + item.title + " | "
                    : item.title
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", marginBottom: "5em" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {TitleHeader}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItemsAfterFilter.map((item) => (
              <>
                <Button
                  key={item.path}
                  style={{
                    textDecoration:
                      activeLink === item.path ? "underline" : " none",
                  }}
                  endIcon={
                    isLoginOrLogout(item.path) ? (
                      item.path === "logout" ? (
                        <LogoutIcon />
                      ) : (
                        <AccountBoxIcon />
                      )
                    ) : null
                  }
                  variant={activeLink === item.path ? "contained" : "outlined"}
                  onClick={(event) => handleClickLink(item.path)}
                  sx={{ color: "#fff" }}
                >
                  {item.title}
                </Button>
              </>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
