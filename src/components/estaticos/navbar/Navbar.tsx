import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import "./Navbar.css";


function Navbar(){
  const [token, setToken]= useLocalStorage('token');
  let history = useHistory();

  function goLogout(){
    setToken('')
    alert ("Usuario deslogado com sucesso!")
    history.push("/login")
  }
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

          <Link to="/home">
          <Box mx={10} className='text-decorator-none'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="corverdeescuro">
            Home
          </Typography>
          </Box>
          </Link>

          <Link to="/posts">
            <Box mx={10} className='text-decorator-none'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="corverdeescuro">
            Postagens
          </Typography>
          </Box>
          </Link>

          <Link to="/temas">
          <Box mx={10} className='text-decorator-none'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}className="corverdeescuro">
            Temas
          </Typography>
          </Box>
          </Link>

          <Link to="/formularioTema">
          <Box mx={10} className='text-decorator-none'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="corverdeescuro">
            Cadastrar tema
          </Typography>
          </Box>
          </Link>
          
         <Box onClick={goLogout} mx={10} className='text-decorator-none'>
          <Button className="corverdeescuro">Logout</Button>
          </Box>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  




    </>)
}
export default Navbar;