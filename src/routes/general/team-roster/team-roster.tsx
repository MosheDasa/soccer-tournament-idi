import * as React from "react";
import { useApiInformation } from "../../../libs/services/api-information";
import { useEffect, useState } from "react";
import { Team } from "../../../libs/models/team";

export default function TeamRoster() {
  const [teams, setTeams] = useState(new Array<Team>());
  const { getTeams } = useApiInformation();

  useEffect(() => {
    const TeamsObj = getTeams();
    if (TeamsObj && TeamsObj.teams) {
      const teamsData = TeamsObj.teams;
      setTeams(teamsData);
    }
  }, []);

  return <h1>TeamRoster</h1>;
}
