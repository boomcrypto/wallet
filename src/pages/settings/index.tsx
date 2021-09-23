import React from 'react';
import {Box} from '@mui/material';
import AccountSettingsCard from './components/AccountCardSettings';
import MoreSettingsCard from './components/MoreSettingsCard';

const Settings: React.FC = () => {
  return (
    <div className="App">
      <Box
        sx={{
          padding: 1,
          flex: 1,
          height: '100%',
          display: 'flex',
          bgcolor: 'primary.main',
          flexDirection: 'column',
          flexGrow: 1,
          alignItems: 'center',
        }}
      >
        <AccountSettingsCard />
        <MoreSettingsCard />
      </Box>
    </div>
  );
};

export default Settings;
