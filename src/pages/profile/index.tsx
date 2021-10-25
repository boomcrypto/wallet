import React from 'react';
import ProfileCard from './components/ProfileCard';
import {Box} from '@mui/material';

const Profile: React.FC = () => {
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
        <ProfileCard />
      </Box>
    </div>
  );
};

export default Profile;
