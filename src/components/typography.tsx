import * as React from 'react';

import {Typography} from '@mui/material';

export type Weight = 'bold' | 'normal';

export const Text: React.FC<{value: string; weight: Weight}> = ({value, weight}) => {
  return (
    <Typography variant="body1" sx={{padding: 1, fontWeight: {weight}}}>
      {value}
    </Typography>
  );
};

export const Caption: React.FC<{text: string}> = ({text}) => {
  return <Typography variant="caption">{text}</Typography>;
};

export const Title: React.FC<{text: string}> = ({text}) => {
  return <Typography variant="h5">{text}</Typography>;
};

export const SectionTitle: React.FC<{text: string}> = ({text}) => {
  return <Typography variant="h6">{text}</Typography>;
};

export const Subtitle1: React.FC<{text: string}> = ({text}) => {
  return <Typography variant="subtitle1">{text}</Typography>;
};

export const Subtitle2: React.FC<{text: string}> = ({text}) => {
  return <Typography variant="subtitle2">{text}</Typography>;
};
