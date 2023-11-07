import * as React from "react";
import { useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useNavigate  } from "react-router-dom";

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const rowHeight = 48;

const pages = [];
const settings = ['My Profile', 'Dashboard', 'Logout'];

const HomePage = () => {

    const navigate = useNavigate();


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

    const handleLogout = async (e) =>{
        e.preventDefault();
        await fetch("http://127.0.0.1:6565/api/v1/users/logout",{
            method:"POST",
            withCredentials: true,
            headers:{
                "Content-Type":"application/json"
            },
        });
        localStorage.removeItem('login')
        navigate('/login');
    
    }

    const [rowData] = useState([
        { name: "Param Jani", dob: "08-05-2022", email: "janiparam12@gmail.com", password:"paramjani" },
        { name: "Raj Shah", dob: "04-01-1999", email: "rajsha@gmail.com", password:"raj" },
        { name: "Sanjeev Sharma", dob: "21-03-1995", email: "sanjiv@yahoo.com", password:"sanjiiv123" },
        { name: "Niku Kapoor", dob: "15-03-2005", email: "nikuu@gmail.com", password:"nikku1223" },
        { name: "Sujoy Shah", dob: "18-11-1998", email: "sushah@hotmail.com", password:"sujoy*11" },
        { name: "Kapil Raval", dob: "21-09-1978", email: "kappu@gmail.com", password:"kappuedit12" },
        { name: "Raj Patel", dob: "25-06-2004", email: "rajpatel22@gmail.com", password:"rajPaTel" },
        { name: "Shyam Rathod", dob: "29-01-2008", email: "shyam@rediffmail.com", password:"shyam12rediff" },
        { name: "Nidhi Dave", dob: "04-12-2006", email: "niddhi@gmail.com", password:"nidhi9877" },
        { name: "Swati Panchal", dob: "05-11-1999", email: "swaaati@gmail.com", password:"swati7865panchal" },
        { name: "Manisha Joshi", dob: "17-03-1998", email: "manishaj@gmail.com", password:"MaNiShA1987" },
      ]);
    
      const [columnDefs] = useState([
        { headerName: "Name", field: "name", sortable:true },
        { headerName: "Date of Birth", field: "dob"},
        { headerName: "Email", field:"email" },
        { headerName: "Password", field:"password" },
      ]);

      const defaultColDef = {
        flex: 1, filter: true,
        resizable: true
      }

  return (
    <>
      <div>
        <AppBar
          position="static"
          style={{ backgroundColor: "#1d2c4f", color: "#939eb8", 
        }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <p style={{fontWeight: "1000", fontSize:"32px", fontFamily: "Raleway"}}>Data-Ware</p>
                
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <p style={{fontWeight: "1000", fontSize:"32px", fontFamily: "Raleway"}}>Data-Ware</p>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      style={{
                        backgroundColor: "#00f5e1",
                        color: "#008d94",
                        fontFamily: "Raleway",
                        fontWeight: "800",
                      }}
                    >
                    </Avatar>
                  </IconButton>
                </Tooltip>
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
                  <MenuItem key={settings[0]}>
                    <Typography textAlign="center">{settings[0]}</Typography>
                  </MenuItem>
                  <MenuItem key={settings[1]}>
                    <Typography textAlign="center">{settings[1]}</Typography>
                  </MenuItem>
                  <MenuItem key={settings[2]} onClick={handleLogout}>
                    <Typography textAlign="center">{settings[2]}</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <div className="ag-theme-alpine" style={{ height: '91vh', width: '100%'  }}>
         <AgGridReact 
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowHeight={rowHeight}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage