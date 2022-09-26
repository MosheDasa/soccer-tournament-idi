import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import { Team } from "../../../libs/models/team";
import { Link } from "react-router-dom";
import useLoderer from "../../../libs/hooks/use-loder";
import { useApiTeams } from "../../../libs/services/api-teams";

export default function ListGroups() {
  const [teams, setTeams] = useState(new Array<Team>());
  const { getTeams } = useApiTeams();

  const { setLoder } = useLoderer();

  useEffect(() => {
    setLoder(true);
    const teamsData = getTeams();
    if (teamsData) {
      setTeams(teamsData);
    }
  }, []);

  return (
    <List
      style={{ minWidth: "100px" }}
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
        <ListItemButton
          component={Link}
          to={"/teamRoster/" + team.teamID}
          key={team.teamID}
        >
          <ListItemIcon>
            <ArrowForwardIosIcon />
          </ListItemIcon>
          <ListItemText primary={team.teamName} />
        </ListItemButton>
      ))}
    </List>
  );
}
