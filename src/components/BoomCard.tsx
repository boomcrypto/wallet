import React from 'react';
import {Card as MuiCard, CardContent, Container} from '@mui/material';

const BoomCard: React.FC<{}> = ({children}) => {
  return (
    <MuiCard sx={{borderRadius: '12px', margin: 2}} variant="outlined">
      <>
        <CardContent>
          <Container disableGutters={true}>{children}</Container>
        </CardContent>
      </>
    </MuiCard>
  );
};

export default BoomCard;
