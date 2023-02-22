import React, { MouseEventHandler } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Box>
                <Box minHeight="50%">
                    <AppBar position="static" sx={{ backgroundColor: "#1F51B1" }}>
                        <Toolbar>
                            <Box display="flex" alignItems="center">
                                <img className="logo" src="App Bar Logo.png" alt="Logo" />
                            </Box>
                            <Box flexGrow={1}></Box>
                            <Avatar alt="User" src="path/to/avatar.png" className="avatar" onClick={handleClick} />
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </Toolbar>
                    </AppBar>
                    <Box sx={{ m: 2 }}>
                        {/* Content goes here */}
                    </Box>
                </Box>
                {/* <Box>
                    <AppBar position="static" sx={{ backgroundColor: "#1F51B1" }}>
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                                <Box display="flex">
                                    <Typography
                                        className="appbar-logo"
                                        variant="h6"
                                        noWrap
                                        component="a"
                                        onClick={() => window.location.href = '/home'}
                                    >
                                        <img src="App Bar Logo.png"></img>

                                    </Typography>
                                </Box>
                                <Box flexGrow={1}></Box>
                                <Box flexGrow={0}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        
                                        <Avatar alt="User" src="path/to/avatar.png"></Avatar>
                                    </IconButton>
                                    <Menu
                                        sx={{ mt: "45px" }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">About Early Detect</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Box> */}
            
            </Box>
        </Box>
    )
}