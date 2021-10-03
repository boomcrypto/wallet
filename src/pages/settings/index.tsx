import React from 'react';
import {Box} from '@mui/material';
import AccountSettingsCard from './components/AccountCardSettings';

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
          alignItems: 'center',
        }}
      >
        <AccountSettingsCard />
        {/*<MoreSettingsCard />*/}
      </Box>
    </div>
  );
};

export default Settings;
