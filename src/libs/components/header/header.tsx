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

const drawerWidth = 240;

export default function HeaderAppBar() {
  const { permissionUser, logout } = useApiAuth();

  useEffect(() => {}, []);

  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");

  const handleClickLink = (path: string) => {
    if (path === "logout") {
      logout();
      path = "";
    }
    setActiveLink(path);
    navigate("/" + path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItemsAfterFilter = navItems.filter(
    (x) => x.permission.indexOf(permissionUser) !== -1
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        טורניר כדורגל
      </Typography>
      <Divider />
      <List>
        {navItemsAfterFilter.map((item) => (
          <ListItem key={item.path} disablePadding>
            {/* <Link to="/adminScreen">adminScreen</Link> */}
            <ListItemButton
              onClick={(event) => handleClickLink(item.path)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", "margin-bottom": "5em" }}>
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
            טורניר כדורגל
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItemsAfterFilter.map((item) => (
              <Button
                onClick={(event) => handleClickLink(item.path)}
                key={item.path}
                sx={{ color: "#fff" }}
              >
                {item.title}
              </Button>
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
