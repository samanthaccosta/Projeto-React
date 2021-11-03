import React from "react";
import './Home.css';
import { Box, Button, Typography, Grid } from '@material-ui/core';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#F8EEE4" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#F28177", fontWeight: "bold" }}>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#F28177", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#9FA668", backgroundColor: "#528C3F", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} style={{
                    backgroundImage:`url(https://i.imgur.com/iuBjps3.jpg)`,
                    backgroundRepeat:'no-repeat', width: '100vh', minHeight:'100vh',backgroundSize: 'cover', backgroundPosition:'center'
            }}>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "#F28177" }}>
                </Grid>
            </Grid>

        </>
    );
}
export default Home;