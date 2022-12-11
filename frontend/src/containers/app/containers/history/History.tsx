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
import { useTheme } from '@mui/material/styles';
import { Call, fetchAllCalls } from '../../../../model/Call';

interface Column {
  id:
    | 'customerId'
    | 'language'
    | 'problemSummary'
    | 'solutionSummary'
    | 'feedback'
    | 'recorded'
    | 'status';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'customerId', label: 'Customer', minWidth: 100 },
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
    id: 'solutionSummary',
    label: 'Solution Summary',
  },
  {
    id: 'feedback',
    label: 'Feedback',
  },
  {
    id: 'recorded',
    label: 'Recorded',
  },
  {
    id: 'status',
    label: 'Status',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  call: Call;
  customerId: string;
  language: string;
  problemSummary: string;
  solutionSummary: string;
  feedback: string;
  recorded: string;
  status: string;
}

function createData(call: Call): Data {
  const customerId = call.customer.id;
  const { language } = call;
  const problemSummary = call.problems[0].summary;
  const solutionSummary = call.solutions[0].summary;
  const { feedback } = call;
  const recorded = call.recordings.length > 0 ? 'Yes' : 'No';
  const { status } = call;
  return {
    call,
    customerId,
    language,
    problemSummary,
    solutionSummary,
    feedback,
    recorded,
    status,
  };
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
          {row.customerId}
        </TableCell>
        <TableCell align="left">{row.language}</TableCell>
        <TableCell align="left">{row.problemSummary}</TableCell>
        <TableCell align="left">{row.solutionSummary}</TableCell>
        <TableCell align="left">{row.feedback}</TableCell>
        <TableCell align="left">{row.recorded}</TableCell>
        <TableCell align="left">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div>Details</div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export function History() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [rows, setRows] = React.useState<Data[]>([]);
  const theme = useTheme();
  useEffect(() => {
    fetchAllCalls().then((calls) => {
      setRows(calls.filter((call) => call.status === 'completed').map(createData));
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
    <Paper
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TableContainer sx={{ maxHeight: '100%', width: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ background: theme.palette.secondary.main }} />
              {columns.map((column) => (
                <TableCell
                  variant="head"
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, background: theme.palette.secondary.main }}
                >
                  <Typography>{column.label}</Typography>
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
        sx={{ marginTop: 'auto' }}
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
export default History;
