import * as React from 'react';
import { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dateformat from 'dateformat';
import Title from './Title';
import { Call, fetchAllCalls } from '../../../../../model';

function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(() => {
      callback();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

interface Data {
  timeStarted: Date;
  duration: number;
  employeeName: string;
  customerName: string;
  problem: string;
}

// Generate Order Data
function createData(call: Call): Data {
  const timeStarted = new Date(call.created_at);
  const duration = Math.round(Math.random() * 100);
  const employeeName = Math.random() > 0.5 ? 'Max Mustermann' : 'Erika Mustermann';
  const customerName = call.customer?.name;
  const problem = call.problems[0].summary;
  return { timeStarted, customerName, employeeName, problem, duration };
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export function ActiveCalls() {
  const [rows, setRows] = React.useState<Data[]>([]);
  useEffect(() => {
    fetchAllCalls().then((calls) => {
      setRows(
        calls
          .filter((call) => call.status === 'in progress')
          .map(createData)
          .splice(-5)
      );
    });
  }, []);

  return (
    <>
      <Title>Active Calls</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Started</TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Problem</TableCell>
            <TableCell>Current Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.timeStarted + row.employeeName}>
              <TableCell>{dateformat(row.timeStarted, 'HH:MM:SS')} </TableCell>
              <TableCell>{row.employeeName}</TableCell>
              <TableCell>{row.customerName}</TableCell>
              <TableCell>{row.problem}</TableCell>
              <TableCell>{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default ActiveCalls;
