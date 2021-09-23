import React from 'react';
import {AppBar, Button, Toolbar, Typography} from '@mui/material';

const BoomToolbar: React.FC<{
  title: string;
}> = ({title}) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>

        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default BoomToolbar;
