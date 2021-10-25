import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {NavigateNext} from '@mui/icons-material';

const ListRow: React.FC<{
  text: string;
  onClick: () => void;
}> = ({text, onClick}) => {
  return (
    <ListItem disablePadding onClick={onClick} sx={{width: '100%', minWidth: '300px'}}>
      <ListItemButton>
        <ListItemText primary={text} />
        <ListItemIcon>
          <NavigateNext />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

export default ListRow;
