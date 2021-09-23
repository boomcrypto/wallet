import {Typography} from '@mui/material';
import React from 'react';

const Title: React.FC<{text: string}> = ({text}) => {
  return <Typography variant="h5">{text}</Typography>;
};

export default Title;
