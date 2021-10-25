import React from 'react';
import {AppBar, Button, Toolbar} from '@mui/material';
import {SectionTitle} from './typography';

const BoomToolbar: React.FC<{
  title: string;
}> = ({title}) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <SectionTitle text={title} />
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default BoomToolbar;
