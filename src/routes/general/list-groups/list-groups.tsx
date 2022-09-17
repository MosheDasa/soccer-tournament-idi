import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useApiInformation } from "../../../libs/services/api-information";
import { useEffect, useState } from "react";
import { Team } from "../../../libs/models/team";
import { Scoreboard } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ListGroups() {
  const [teams, setTeams] = useState(new Array<Team>());
  const { getTeams } = useApiInformation();

  useEffect(() => {
    const TeamsObj = getTeams();
    if (TeamsObj && TeamsObj.teams) {
      const teamsData = TeamsObj.teams;
      setTeams(teamsData);
    }
  }, []);

  const clickTeam = () => {};

  return (
    <List
      sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          סגל קבוצות
        </ListSubheader>
      }
    >
      {teams.map((team: Team) => (
        <ListItemButton component={Link} to={"/teamRoster"} key={team.teamID}>
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
          <ListItemText primary={team.teamName} />
        </ListItemButton>
      ))}
    </List>
  );
}
