import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/material";
import icon from "../../Assets/Images/WWP.svg";


const drawerWidth = 300;

function DrawerAppBar(props) {

  const { window, position, bg } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        background: !bg ? "rgb(34, 75, 141)" : "transparent",
        position: position ? position : "sticky !important",
        top: "0",
        zIndex: "2",
        width: "100%",
      }}
    >
      <Container
        sx={{
          px:"10px",
          "& a": {
            textDecoration: "none",
          },
        }}
      >
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            position: "inherit",
            backgroundColor: "transparent",
            boxShadow: "none",
            py: "0.6rem",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", p: "0 !important" }}>
            <Link
              to={"/"}
              style={{ display: "flex", alignItems: "center", gap: "0.1rem" }}
            >
              {" "}
              <Typography
                lineHeight={0}
                component={"img"}
                src={icon}
                sx={{ width: { sm: "220px", xs: "160px",    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",

                  }, } }}
              />
            </Link>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: "none", textAlign: "end" } }}
            >
              <MenuIcon />
            </IconButton> */}

            <Box
              sx={{
                display:"flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
              component={Link}
              to="/register"
                sx={{
                  background: "green",
                  width:{sm:"200px",xs:"150px"},
                  color: "#fff",
                  p: {sm:"10px 30px",xs:"8px 30px"},
                  fontSize: "16px",
                  backgroundImage: "linear-gradient(54deg,#d40c6c,#30d06d)",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.6)",
                  },
                }}
              >
                Register
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { md: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "rgb(34, 75, 141)",
                padding: "1rem",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "7px",
                right: "7px",
                background: "#fff",
                height: "35px",
                width: "35px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleDrawerToggle}
            >
              <CloseIcon sx={{ color: "#000" }} />
            </Box>
            <Box
              sx={{
                display: "grid",
                gap: "1rem",
                justifyContent: "center",
                textAlign: "center",
                mt: "2rem",
              }}
            >
              <Box
                sx={{
                  "& a": {
                    textDecoration: "none",
                  },
                }}
              >
                {/* <Link to={"/"}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Typography component={"img"} src={icon} width={"60px"} />
                    Crescent Intellects
                  </Typography>
                </Link> */}
              </Box>
              <Box pt={"2rem"}>
              <Button
                 component={Link}
              to="/register"
                sx={{
                  background: "green",
                  color: "#fff",
                  p: "10px 30px",
                  fontSize: "16px",
                  backgroundImage: "linear-gradient(54deg,#d40c6c,#30d06d)",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.6)",
                  },
                }}
              >
                Register
              </Button>
              </Box>
         
            </Box>
          </Drawer>
        </nav>
      </Container>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
