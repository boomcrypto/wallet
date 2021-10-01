import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

export interface InfoItem {
  label: string;
  text: string;
}

const ProfileCard: React.FC = () => {
  return (
    <TableContainer sx={{maxWidth: 650}} component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell
              sx={{width: 32, borderBottom: 'none'}}
              align="left"
              component="th"
              scope="row"
            >
              <Typography sx={{fontWeight: 'bold'}}> name</Typography>
            </TableCell>
            <TableCell sx={{borderBottom: 'none'}} align="left">
              amrro
            </TableCell>
          </TableRow>

          <TableRow key={`121`}>
            <TableCell
              sx={{width: 32, borderBottom: 'none'}}
              align="left"
              component="th"
              scope="row"
            >
              <Typography sx={{fontWeight: 'bold'}}> name</Typography>
            </TableCell>
            <TableCell sx={{borderBottom: 'none'}} align="left">
              amrro
            </TableCell>
          </TableRow>

          <TableRow key={`121`}>
            <TableCell
              sx={{width: 32, borderBottom: 'none'}}
              align="left"
              component="th"
              scope="row"
            >
              <Typography sx={{fontWeight: 'bold'}}> name</Typography>
            </TableCell>
            <TableCell sx={{borderBottom: 'none'}} align="left">
              amrro
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// export const CreateElement: React.FC<{label: string; text: string}> = (label, text) => {
//   return (
//     <TableRow key={`${label}${text}`} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
//       <TableCell component="th" scope="row">
//         {label}
//       </TableCell>
//       <TableCell align="right">{text}</TableCell>
//     </TableRow>
//   );
// };

export default ProfileCard;
