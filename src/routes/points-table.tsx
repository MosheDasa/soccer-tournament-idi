import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(rating: number, teamName: string, points: number) {
  return { rating, teamName, points };
}

const rows = [
  createData(1, "מערכות מידע", 12),
  createData(2, "חידושים", 10),
  createData(3, "שימור רכב", 8),
  createData(4, "דירות", 7),
  createData(5, "חיים", 6),
  createData(6, "תאונות אישיות", 3),
];

export default function PointsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>נקודות</StyledTableCell>
            <StyledTableCell align="right">קבוצה</StyledTableCell>
            <StyledTableCell align="right">מקום</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.rating}>
              <StyledTableCell component="th" scope="row">
                {row.points}
              </StyledTableCell>
              <StyledTableCell align="right">{row.teamName}</StyledTableCell>
              <StyledTableCell align="right">{row.rating}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
