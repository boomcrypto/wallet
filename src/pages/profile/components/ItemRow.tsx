import React from 'react';
import {Container} from '@mui/material';
import {Text} from '../../../components/typography';

const InfoItemRow: React.FC<{
  label: string;
  text: string;
}> = ({label, text}) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <Text value={label} />
      <Text value={text} />
    </Container>
  );
};

export default InfoItemRow;
