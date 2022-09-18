import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../libs/styles/team-roster-style";
import { useApiInformation } from "../../../libs/services/api-information";
import { useEffect, useState } from "react";
import { GroupPointsData } from "../../../libs/models/summaryPointsTable";

export default function PointsTable() {
  const { getSummaryPointsTable } = useApiInformation();
  const [summaryPointsTable, setSummaryPointsTable] = useState(
    new Array<GroupPointsData>()
  );

  useEffect(() => {
    getSummaryPointsTable().then((result: any) => {
      setSummaryPointsTable(result.summaryPointsTable);
    });
  }, [""]);

  return (
    <>
      <h1>טבלת נקודות</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">קבוצה</StyledTableCell>
              <StyledTableCell align="right">מקום</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {summaryPointsTable &&
              summaryPointsTable.map((groupPoints) => (
                <StyledTableRow key={groupPoints.rating}>
                  <TableCell align="right" component="th" scope="row">
                    {groupPoints.teamName}
                  </TableCell>
                  <TableCell align="right">{groupPoints.rating}</TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
