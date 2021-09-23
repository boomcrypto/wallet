import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";

const BoomToolbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h6" component="div">
                    Boom Setting
                </Typography>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default BoomToolbar;
