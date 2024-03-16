import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Typed } from "react-typed";
import { Grid } from "@mui/material";
import "../style.css";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        style={{
          position: "fixed",
          top: 0,
          paddingTop: 0.5,
          background: "rgb(2,0,36)",
          // background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(221,177,80,1) 69%, rgba(235,152,21,1) 100%)",
          boxShadow: "none",
        }}
      >
        <Container position="static" maxWidth="md">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{ display: { xs: "none", md: "flex", sm: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex", sm: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", sm: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#FF8C00" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon
              sx={{ display: { xs: "flex", md: "none", sm: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none", sm: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex", sm: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* <Box
        container
        style={{
          backgroundImage: `url(${require("./assets/elavator1.jpg")})`,
          backgroundSize: "cover",

          height: "50vh",
          color: "#f5f5f5",
        }}
      >
        <Typography
          style={{
            zIndex: 1,
          }}
        >
          hello nirav here..
        </Typography>
      </Box> */}
      {/* <Grid
        container
        style={{
          backgroundImage: `url(${require("./assets/elavator1.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: 720,
          backgroundColor: "red",
        }}
      >
        <Typography
          style={{ alignItems: "center", display: "flex", color: "white" }}
        >
          <Typography variant="h1" className="animated-text">
            Hello Nirav, welcome!
          </Typography>
        </Typography>
      </Grid> */}
      <Grid className="background-container" container>
        <div className="background-image"></div>
        <div
          style={{
            left:
              window.innerWidth <= 300
                ? 150
                : window.innerWidth >= 900
                ? "37%"
                : window.innerWidth >= 600 && window.innerWidth < 890
                ? "52%"
                : 220,
            // backgroundColor: "red",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
          className="text-on-image"
        >
          <Typography
            style={{
              fontSize:
                window.innerWidth > 700 && Window.innerWidth <= 900
                  ? 45
                  : window.innerWidth <= 300
                  ? 25
                  : window.innerWidth >= 700
                  ? 50
                  : 30,
              // whiteSpace: "nowrap",
            }}
          >
            hello nirav here
          </Typography>
        </div>
      </Grid>
    </div>
  );
}
export default NavBar;

// const NavBar = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
//         <div className="container">
//           <a className="navbar-brand logo" href="index_1.html">
//             <h1>Mudra</h1>
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="true"
//             aria-label="Toggle navigation"
//           >
//             <i className="mdi mdi-menu"></i>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item active">
//                 <a href="#" className="nav-link">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#" className="nav-link">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#" className="nav-link">
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#" className="nav-link">
//                   Portfolio
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#" className="nav-link">
//                   Achievements
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#" className="nav-link">
//                   Blog
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#" className="nav-link">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <section className="home-bg section h-100vh" id="home">
//         <div className="bg-overlay"></div>
//         <div className="container z-index">
//           <div className="row justify-content-center">
//             <div className="col-lg-12">
//               <div className="text-white text-center">
//                 <h4>Hello & Welcome</h4>
//                 <h1 className="header_title mb-0 mt-3">
//                   I Am{" "}
//                   <Typed
//                     strings={["A Designer.", "A Developer."]}
//                     typeSpeed={100}
//                     backDelay={3000}
//                     loop
//                     className="element fw-bold"
//                   />
//                 </h1>
//                 <ul className="social_home list-unstyled text-center pt-4">
//                   <li className="list-inline-item">
//                     <a href="javascript:void(0)">
//                       <i className="mdi mdi-facebook"></i>
//                     </a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="javascript:void(0)">
//                       <i className="mdi mdi-linkedin"></i>
//                     </a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="javascript:void(0)">
//                       <i className="mdi mdi-dribbble"></i>
//                     </a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="javascript:void(0)">
//                       <i className="mdi mdi-google-plus"></i>
//                     </a>
//                   </li>
//                   <li className="list-inline-item">
//                     <a href="javascript:void(0)">
//                       <i className="mdi mdi-twitter"></i>
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="header_btn">
//                   <a
//                     href="javascript:void(0)"
//                     className="btn btn-outline-custom btn-rounded mt-4"
//                   >
//                     Download CV
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="scroll_down">
//           <a href="#about" className="scroll">
//             <i className="mbri-arrow-down text-white"></i>
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default NavBar;
