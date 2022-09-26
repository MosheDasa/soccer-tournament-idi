import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Player } from "../../../libs/models/team";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../libs/styles/team-roster-style";
import { useApiTeams } from "../../../libs/services/api-teams";

export default function CustomizedTables() {
  const [players, setPlayers] = useState<Array<Player>>(new Array<Player>());
  const [teamName, setTeamName] = useState("");
  const location = useLocation();
  const { getTeamById } = useApiTeams();

  useEffect(() => {
    LOAD_TEAM_ROSTER();
  }, []);

  const LOAD_TEAM_ROSTER = async () => {
    const teamid = location.pathname.replace("/teamRoster/", "");
    const TeamObj = await getTeamById(+teamid);
    if (TeamObj && TeamObj.players) {
      setTeamName(TeamObj.teamName);
      setPlayers(TeamObj.players);
    }
  };

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
              <StyledTableRow key={player.playerId}>
                <TableCell align="right" component="th" scope="row">
                  {player.playerId}
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
