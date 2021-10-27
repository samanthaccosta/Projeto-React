import React from "react";
import './Home.css';
import { Box, Button, Typography , Grid} from '@material-ui/core';

function Home() {
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#F2E18D" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#4F7302", fontWeight: "bold" }}>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#4F7302", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "#D97F11", backgroundColor: "#4F7302", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/9raidPz.jpg" alt="skincare" width="auto" height="auto"/>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "#F2D399" }}>
                </Grid>
            </Grid>
            
            </>
            );
}
            export default Home;