import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Collapse, IconButton, Typography } from '@mui/material';
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Phone,
  AccountCircle,
} from '@mui/icons-material';
import { useEffect } from 'react';
import { Call, fetchAllCalls } from '../../../../model/Call';

interface Column {
  id:
    | 'customer'
    | 'customerId'
    | 'customerMood'
    | 'language'
    | 'problemSummary'
    | 'faq'
    | 'status'
    | 'acceptCall'
    | 'calls';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'customer', label: 'Customer', minWidth: 100 },
  { id: 'customerId', label: 'Customer-Id', minWidth: 100 },
  { id: 'customerMood', label: 'Customer-Mood', minWidth: 50 },
  {
    id: 'language',
    label: 'Language',
    minWidth: 100,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'problemSummary',
    label: 'Problem Summary',
  },
  {
    id: 'faq',
    label: 'Faq',
  },
  {
    id: 'status',
    label: 'Status',
    format: (value: number) => value.toFixed(2),
  },
  { id: 'calls', label: 'Calls' },
];

interface Data {
  call: Call;
  customer: string;
  customerId: string;
  customerMood: string;
  language: string;
  problemSummary: string;
  faq: boolean;
  status: string;
}

function mapSentimentToString(sentiment: number): string {
  if (sentiment < 0 || sentiment > 1) {
    throw new Error('Invalid sentiment value');
  }

  if (sentiment < 0.25) {
    return 'Very Bad';
  }
  if (sentiment < 0.5) {
    return 'Bad';
  }
  if (sentiment < 0.75) {
    return 'Neutral';
  }
  return 'Good';
}

function createData(call: Call): Data {
  const customer = call.customer.name;
  const customerId = call.customer.id;
  const customerMood = mapSentimentToString(call.sentiment);
  const { language, status } = call;
  const problemSummary = call.problems[0]?.summary;
  const faq = !!call.faqs?.length;

  return { call, customer, customerId, customerMood, language, problemSummary, faq, status };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.customer}
        </TableCell>
        <TableCell align="left">{row.customerId}</TableCell>
        <TableCell align="left">{row.customerMood}</TableCell>
        <TableCell align="left">{row.language}</TableCell>
        <TableCell align="left">{row.problemSummary}</TableCell>
        <TableCell align="left">{`${row.faq}`}</TableCell>
        <TableCell align="left">{row.status}</TableCell>
        <TableCell align="left">
          <Button variant="contained" color="secondary" startIcon={<Phone />}>
            Accept Call
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div>Details</div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export function LiveCalls() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [rows, setRows] = React.useState<Data[]>([]);

  useEffect(() => {
    fetchAllCalls().then((calls) => {
      setRows(calls.map(createData));
    });
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', height: '100%' }}>
      <TableContainer sx={{ maxHeight: '100%', width: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead color="secondary">
            <TableRow>
              <TableCell />
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <Typography color="secondary">{column.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return <Row key={row.call.id} row={row} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default LiveCalls;
