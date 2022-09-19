import { useLocalStorage } from "../hooks/use-local-storage";
import { ResponseData } from "../models/generta";
import { KeyLocalStorge } from "../models/keys";
import { Team } from "../models/team";

export const useApiTeams = () => {
  const [dataStorage, setDataStorage] = useLocalStorage(
    KeyLocalStorge.TeamsKeyStorage,
    ""
  );

  // ---------------- Teams ----------------------
  const loadTeams = async () => {
    fetch("/mock/team.json")
      .then((res) => res.json())
      .then((response: ResponseData<Array<Team>>) => {
        setDataStorage(response.data);
      });
  };

  const getTeamById = (teamId: number) => {
    const teams = dataStorage as Array<Team>;
    const teamObj = teams.filter((x) => x.teamID === teamId);
    if (teamObj) {
      return teamObj[0];
    }
    return null;
  };

  const getTeams = () => {
    return dataStorage as Array<Team>;
  };

  return {
    loadTeams,
    getTeams,
    getTeamById,
  };
};
