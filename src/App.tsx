import React from 'react';
import './App.css';
import Settings from "./screens";
import {ThemeProvider} from "@mui/material";
import boomTheme from "./theme";

function App() {
    return (
        <ThemeProvider theme={boomTheme}>
                <Settings/>
        </ThemeProvider>
    );
}


export default App;
