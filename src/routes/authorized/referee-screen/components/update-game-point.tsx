import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Game } from "../../../../libs/models/game";
import { ResponseData } from "../../../../libs/models/generta";
import { Player } from "../../../../libs/models/team";
import { useApiTeams } from "../../../../libs/services/api-teams";

export interface updateGameResultProp {
  gameData: Game;
  gameId: number;
  updateGamePoint: (
    gameId: number,
    teamId: number,
    playerNumber: number
  ) => Promise<ResponseData<string>>;
}

function UpdateGamePointComp(props: updateGameResultProp) {
  const [selectedPlayer, setSelectedPlayer] = useState<number>(0);
  const [selectedGroup, setSelectedGroup] = useState<number>(0);
  const [listPlayer, setListPlayer] = useState<Array<Player>>();

  const { getTeamById } = useApiTeams();

  const handleSelectedGroup = (teamId: number) => {
    setSelectedGroup(teamId);
    const team = getTeamById(teamId);
    if (team && team.players) {
      setSelectedPlayer(0);
      setListPlayer(team.players);
    }
  };

  const handleChange = (event: any) => {
    setSelectedPlayer(event.target.value);
  };

  const updateGamePoint = () => {
    if (selectedPlayer !== 0 && selectedGroup !== 0) {
      props
        .updateGamePoint(props.gameId, selectedGroup, selectedPlayer)
        .then((response: ResponseData<string>) => {
          setSelectedPlayer(0);
          setSelectedGroup(0);
          setListPlayer([]);
          return response;
        });
    } else {
      //todo
    }
  };

  return (
    <>
      <section>
        <h3> דיווח גול עבור קבוצה:</h3>
        <Stack direction="row" spacing={1}>
          <Box m={3} pt={1}>
            {props.gameData.teamA.points} נקודות
            <Button
              onClick={(e) => handleSelectedGroup(props.gameData.teamA.teamId)}
              variant={
                selectedGroup === props.gameData.teamA.teamId
                  ? "contained"
                  : "outlined"
              }
              sx={{ fontSize: 24 }}
            >
              {props.gameData.teamA.teamName}
            </Button>
          </Box>
          <Box m={3} pt={4}>
            {props.gameData.teamB.points} נקודות
            <Button
              onClick={(e) => handleSelectedGroup(props.gameData.teamB.teamId)}
              variant={
                selectedGroup === props.gameData.teamB.teamId
                  ? "contained"
                  : "outlined"
              }
              sx={{ fontSize: 24 }}
            >
              {props.gameData.teamB.teamName}
            </Button>
          </Box>
        </Stack>
      </section>

      {selectedGroup !== 0 && (
        <>
          <h3>מי הכניס את הגול?</h3>
          <Box m={1} pt={0}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedPlayer}
                onChange={handleChange}
              >
                {listPlayer &&
                  listPlayer.map((player: Player) => (
                    <MenuItem
                      key={player.playerNumber}
                      value={player.playerNumber}
                    >
                      {player.playerNumber} - {player.fullName}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>

          <Stack m={1} pt={3}>
            <Button
              disabled={selectedPlayer === 0 ? true : false}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={updateGamePoint}
            >
              שמור
            </Button>
          </Stack>
        </>
      )}
    </>
  );
}

export default UpdateGamePointComp;
