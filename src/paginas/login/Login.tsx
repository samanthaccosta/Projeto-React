import React from 'react';
import './Login.css';
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core"
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="fundo">
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="negrito, corverde">
                            Entrar
                        </Typography>
                        <TextField className="fundo2" id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField className="fundo2" id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='passoword' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to="/home" className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary' className='fundoBotao'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>

                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='negrito, rosa'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://i.imgur.com/MauGzyn.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
            </Grid>
        </Grid>
    )
}
export default Login;