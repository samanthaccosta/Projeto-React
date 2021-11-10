import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function Footer() {
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
      );
      var footerComponent;

      if (token != ''){
          footerComponent=   <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid alignItems="center" item xs={12}>
              <Box className='corTamanho'>
                  <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                      <Typography variant="h5" align="center"  gutterBottom className='corFonte' >Siga-nos nas redes sociais </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" justifyContent="center">
                      <a href="https://www.facebook.com/samantha.cristina.92" target="_blank">
                          <FacebookIcon className='corLetra' />
                      </a>
                      <a href="https://www.instagram.com/samyccosta/" target="_blank">
                          <InstagramIcon className='corLetra' />
                      </a>
                      <a href="https://www.linkedin.com/in/samantha-costa-0290b91a7/" target="_blank">
                          <LinkedInIcon  className='corLetra'/>
                      </a>
                      <a href="https://github.com/samanthaccosta" target="_blank">
                      <GitHubIcon className='corLetra' />
                  </a>
              </Box>
          </Box>
          <Box className='corTamanho2'>
              <Box paddingTop={1}>
                  <Typography variant="subtitle2" align="center" gutterBottom className="corrosa" >© 2021 Copyright:</Typography>
              </Box>
              <Box>
                  <a target="_blank" href="https://brasil.generation.org">
                      <Typography variant="subtitle2" gutterBottom className="corrosa" align="center">brasil.generation.org</Typography>
                  </a>
              </Box>
          </Box>
      </Grid>
  </Grid>
      }
    return (
        <>
          {footerComponent}
        </>
    )
}
export default Footer;