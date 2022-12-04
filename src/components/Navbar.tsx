import React, { FC, ReactElement } from "react";
import "react-router-dom";

import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* have a link - linked to home page (employee index) */}
          {window.location.pathname !== "/login" && window.location.pathname !== "/signup" && window.location.pathname !== "/" && (
            <Link
              component={NavLink}
              to="/employees"
              underline="none"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                color: "black",
                textDecoration: "none",
              }}
            >
              <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              Magic Shop Cafe <EmojiFoodBeverageIcon />


            </Typography>
            </Link>
          )}
          {window.location.pathname === "/login" && (
            <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            Magic Shop Cafe <EmojiFoodBeverageIcon />


          </Typography>
          )}

          {window.location.pathname === "/signup" && (
            <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            Magic Shop Cafe <EmojiFoodBeverageIcon />


          </Typography>
          )}

          {window.location.pathname === "/" && (
            <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            Magic Shop Cafe <EmojiFoodBeverageIcon />


          </Typography>
          )}  

          {window.location.pathname !== "/login" && window.location.pathname !== "/signup" && window.location.pathname !== "/" && (
            <Button onClick={() => sessionStorage.clear()} component={NavLink} to="/login" sx={{ color: "black" }}>Logout</Button>
          )}
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;