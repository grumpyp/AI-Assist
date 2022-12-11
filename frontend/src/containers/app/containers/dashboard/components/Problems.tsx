import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Problem Data
function createData(id: number, date: string, name: string, problem: string, entity: string) {
  return { id, date, name, problem, entity };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Iphone is super slow', 'Iphone'),
  createData(1, '17 Mar, 2019', 'Paul McCartney', 'Iphone doesnt update software', 'Iphone'),
  createData(
    2,
    '17 Mar, 2019',
    'Tom Scholz',
    'I tried to update to your newest version on macOS it doesnt work',
    'macOS'
  ),
  createData(
    3,
    '17 Mar, 2019',
    'Michael Jackson',
    'Since I did the software update on macOS the machine is slow',
    'macOS'
  ),
  createData(
    4,
    '20 Mar, 2019',
    'Bruce Springsteen',
    'Software makes my machine super slow, I am on macOS BigSur',
    'macOS, BigSur'
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export function Problems() {
  return (
    <>
      <Title>KPI: Problems</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Problem</TableCell>
            <TableCell>Entity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.problem}</TableCell>
              <TableCell>{row.entity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Problems;
