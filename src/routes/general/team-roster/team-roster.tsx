import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApiInformation } from "../../../libs/services/api-information";
import { Player, Team } from "../../../libs/models/team";
import { StyledTableCell, StyledTableRow } from "./team-roster-style";

export default function CustomizedTables() {
  const [players, setPlayers] = useState<Array<Player>>(new Array<Player>());
  const [teamName, setTeamName] = useState("");
  const location = useLocation();
  const { getTeamById } = useApiInformation();

  useEffect(() => {
    const teamid = location.pathname.replace("/teamRoster/", "");
    const TeamObj = getTeamById(+teamid);
    if (TeamObj && TeamObj.players) {
      setTeamName(TeamObj.teamName);
      setPlayers(TeamObj.players);
    }
  }, []);

  return (
    <>
      <h1>סגל הקבוצות - {teamName}</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">מספר</StyledTableCell>
              <StyledTableCell align="right">שם</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <StyledTableRow key={player.playerNumber}>
                <TableCell align="right" component="th" scope="row">
                  {player.playerNumber}
                </TableCell>
                <TableCell align="right">{player.fullName}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
