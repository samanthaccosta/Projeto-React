import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar(){
    return(
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"#D97F11"}}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:"#F2F2F2"}}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:"#F2F2F2"}}>
            Postagens
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}style={{color:"#F2F2F2"}}>
            Temas
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:"#F2F2F2"}}>
            Cadastrar tema
          </Typography>
          <Button style={{color:'#F2F2F2'}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  




    </>)
}
export default Navbar;