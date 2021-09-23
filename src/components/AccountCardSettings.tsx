import React from 'react';
import {Avatar, Box, Card, CardContent} from '@mui/material';
import ListRow from './ListItem';
import Title from '../common/Title';
import {deepPurple} from '@mui/material/colors';

const AccountSettingsCard: React.FC<{}> = () => {
  return (
    <Card sx={{width: 500, borderRadius: 2, margin: 2}} variant="outlined">
      <>
        <CardContent>
          <SettingsCardHeader text={'Settings'} />
          <ListRow text={'Profile'} onClick={() => alert('hello me.')} />
          <ListRow text={'Sign Out'} onClick={() => alert('hello me.')} />
        </CardContent>
      </>
    </Card>
  );
};

const SettingsCardHeader: React.FC<{text: string}> = ({text}) => {
  return (
    <Box
      sx={{
        padding: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Title text={text} />
      <Avatar sx={{width: 32, height: 32, bgcolor: deepPurple[500]}}>A</Avatar>
    </Box>
  );
};

export default AccountSettingsCard;
