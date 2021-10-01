import React from 'react';
import {Container, Typography} from '@mui/material';

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
      <Typography variant="body1" sx={{padding: 1, fontWeight: 'bold'}}>
        {`${label}: `}
      </Typography>
      <Typography variant="body1" sx={{padding: 1}}>
        {text}
      </Typography>
    </Container>
  );
};

export default InfoItemRow;
