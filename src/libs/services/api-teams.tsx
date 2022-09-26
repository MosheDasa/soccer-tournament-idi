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
    const teams = dataStorage as Array<Team>;
    if (teams && teams.length) {
      return teams;
    } else {
      return fetch(process.env.REACT_APP_URL_API + "/Teams")
        .then((res) => res.json())
        .then((response: ResponseData<Array<Team>>) => {
          setDataStorage(response.data);
          return response.data;
        });
    }
  };

  const getTeamById = async (teamId: number) => {
    let teams = dataStorage as Array<Team>;

    if (!teams) {
      teams = await loadTeams();
    }

    const teamObj = teams.filter((x) => x.teamID === teamId);
    if (teamObj) {
      return teamObj[0];
    }
    return null;
  };

  return {
    loadTeams,
    getTeamById,
  };
};
