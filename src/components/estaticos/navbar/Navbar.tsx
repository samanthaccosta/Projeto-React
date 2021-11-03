import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import "./Navbar.css";


function Navbar(){
    return(
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='corfundo'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="corverdeescuro">
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="corverdeescuro">
            Postagens
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}className="corverdeescuro">
            Temas
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="corverdeescuro">
            Cadastrar tema
          </Typography>
          <Link to={'/login'} className='text-decorator-none'>
          <Button className="corverdeescuro">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  




    </>)
}
export default Navbar;