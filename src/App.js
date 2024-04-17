import gsap from 'gsap';
import { useEffect } from 'react';
import './App.css';
import './App.scss';
import contact from './resources/img/contact.jpg';
import services from './resources/img/services.jpg';
import logo from './resources/img/logo_close_up.png';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const App = () => {

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

  useEffect(() => {
    let sections = document.querySelectorAll(".section"),
      images = document.querySelectorAll(".background"),
      headings = document.querySelectorAll(".section-title"),
      outerWrappers = document.querySelectorAll(".wrapper-outer"),
      innerWrappers = document.querySelectorAll(".wrapper-inner"),
      currentIndex = -1,
      wrap = (index, max) => (index + max) % max,
      animating;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index, sections.length);
      animating = true;

      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;
      let tl = gsap.timeline({ defaults: { duration: 1.25, ease: "power1.inOut" }, onComplete: () => (animating = false) });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([outerWrappers[index], innerWrappers[index]], { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) }, { yPercent: 0 }, 0)
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(headings[index], { autoAlpha: 0, yPercent: 150 * dFactor }, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power2",
          stagger: { each: 0.02, from: "random" },
        }, 0.2);

      currentIndex = index;
    }

    function navigateSectionById(id) {
      let index = Array.from(sections).findIndex(section => section.id === id);

      if (index !== -1 && index !== currentIndex) {
        gotoSection(index, index > currentIndex ? 1 : -1);
      }
    }

    let lastTap = 0;
    document.addEventListener("touchend", function (event) {
      let currentTime = new Date().getTime();
      let tapLength = currentTime - lastTap;
      if (tapLength < 500 && tapLength > 0) {
        gotoSection(currentIndex + 1, 1);
        event.preventDefault();
      }
      lastTap = currentTime;
    });

    window.addEventListener("wheel", (event) => {
      if (event.deltaY < 0 && !animating) {
        gotoSection(currentIndex - 1, -1);
      } else if (event.deltaY > 0 && !animating) {
        gotoSection(currentIndex + 1, 1);
      }
    });

    document.querySelectorAll("nav a").forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        navigateSectionById(e.currentTarget.getAttribute("href").slice(1));
      });
    });

    gotoSection(0, 1);
  }, []);

  return (
    <div className="app-container">
       <AppBar position="static">
    <Container maxWidth="xl" className="container">
      <Toolbar disableGutters>
      <Toolbar className="tool">
          <Typography variant="title">
            <img src={logo}  height={80}  />
          </Typography>
        </Toolbar>
       
       

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        <div>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         
              <header className="header" >
                <nav className="navHeader">
                  <a href="#first">Home</a>&nbsp;&nbsp;
                  <a href="#second">Services</a>&nbsp;&nbsp;
                  <a href="#fifth">Contact</a>
                </nav>
              </header>
              <Section id="first" title="Nova Enigma" className="first" bgUrl="https://images.unsplash.com/photo-1605629713998-167cdc70afa2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2OTM1NTR8&ixlib=rb-4.0.3&q=85" />
              <Section id="second" title="Services" className="second" bgUrl={services} />
              <Section id="fifth" title="Contact" className="fifth" bgUrl={contact} />
        </Box>
        </div>
       
        

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
    </div>
  );
};
const Section = ({ id, title, className, bgUrl }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrapper-outer">
        <div className="wrapper-inner">
          <div className="background" style={{ backgroundImage: `url(${bgUrl})` }}>
            <h2 className="section-title">{title}</h2>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default App;
