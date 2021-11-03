import React from 'react';
import './CadastroUsuario.css';
import { Grid, Box, Typography, Button,TextField } from '@material-ui/core';
import {Link} from 'react-router-dom';

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='fundo'>
            <Grid item xs={6} className='imagem'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box padding={10}>
                <form >
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="negrito, corverde">Cadastre-se</Typography>
                    <TextField className="fundo2" id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField className="fundo2" id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField className="fundo2" id='senha' label='Senha' variant='outlined' name='senha' margin='normal'type='passoword'  fullWidth />
                    <TextField className="fundo2" id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='passoword' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                        <Link to="/login" className='text-decorator-none'>
                            <Button variant='contained' color='secondary' className='btnCancelar'>
                                Cancelar
                            </Button>
                        </Link>
                        <Button type='submit' variant='contained' color='primary' className='fundoBotao'>
                                Cadastrar
                            </Button>
                    </Box>
                </form>

            </Box></Grid>
        </Grid>
    );
}
export default CadastroUsuario;