import React from 'react';
import {Box} from '@mui/material';
import ListRow from '../../../components/ListItem';
import {Title} from '../../../components/typography';
import BoomCard from '../../../components/BoomCard';

const MoreSettingsCard: React.FC = () => {
  return (
    <BoomCard>
      <MoreCardHeader text={'More'} />
      <ListRow text={'Fees'} onClick={() => alert('hello me.')} />
      <ListRow text={'Learn about RunRiot'} onClick={() => alert('hello me.')} />
      <ListRow text={'Twitter'} onClick={() => alert('hello me.')} />
      <ListRow text={'Email us'} onClick={() => alert('hello me.')} />
    </BoomCard>
  );
};

const MoreCardHeader: React.FC<{text: string}> = ({text}) => {
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
    </Box>
  );
};

export default MoreSettingsCard;
