import {createTheme} from "@mui/material";

/*
    --q-color-primary: #f4e8f9;
    --q-color-secondary: #e9d1f2;
    --q-color-accent: #a748cb;
    --q-color-positive: #21ba45;
    --q-color-negative: #f5006a;
    --q-color-info: #31ccec;
    --q-color-warning: #f2c037;
    --q-color-dark: #1d1d1d;
 */

const boomTheme = createTheme({
    palette: {
        primary: {
            main: '#f4e8f9',
        },
        secondary: {
            main: '#e9d1f2',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,

    }
})

export default boomTheme;
