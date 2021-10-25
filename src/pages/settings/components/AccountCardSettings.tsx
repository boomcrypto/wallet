import React from 'react';
import {Avatar, Box} from '@mui/material';
import ListRow from '../../../components/ListItem';
import {deepPurple} from '@mui/material/colors';
import {Title} from '../../../components/typography';
import BoomCard from '../../../components/BoomCard';

const AccountSettingsCard: React.FC<{}> = () => {
  return (
    <BoomCard>
      <SettingsCardHeader text={'Settings'} />

      <ListRow text={'Profile'} onClick={() => alert('hello me.')} />
      <ListRow text={'Sign Out'} onClick={() => alert('hello me.')} />
    </BoomCard>
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
