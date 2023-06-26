import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { Errand } from '../models/errand.model';

export interface ErrandsTableProps {
  errands: Errand[];
}

export const ErrandsTable = (props: ErrandsTableProps) => {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: '#FFCA48' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.errands.map(errand => {
            return (
              <TableRow key={errand.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{errand.title}</TableCell>
                <TableCell align="right">{errand.description}</TableCell>
                <TableCell align="right">{errand.type}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
