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
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from  'react-toastify';


function Navbar(){
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );
  let history = useHistory();
  const dispatch= useDispatch();

  function goLogout(){
    toast.info ('Usuario deslogado com sucesso!', {
      position : 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: 'colored',
      progress: undefined

    });
    history.push("/login")
  }
   var navbarComponent;

   if (token != ''){
     navbarComponent=  <Box sx={{ flexGrow: 1 }}>
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

         <Link to="/home" className='text-decorator-none'>
         <Box mx={10}>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="corverdeescuro">
           Home
         </Typography>
         </Box>
         </Link>

         <Link to="/posts" className='text-decorator-none'>
           <Box mx={10} >
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="corverdeescuro">
           Postagens
         </Typography>
         </Box>
         </Link>

         <Link to="/temas" className='text-decorator-none'>
         <Box mx={10} >
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}className="corverdeescuro">
           Temas
         </Typography>
         </Box>
         </Link>

         <Link to="/formularioTema" className='text-decorator-none'>
         <Box mx={10} >
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
   }
    return(
    <>
    {navbarComponent}
    </>)
}
export default Navbar;