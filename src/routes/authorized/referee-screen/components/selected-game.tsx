import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Game } from "../../../../libs/models/game";
import { useApiGamesData } from "../../../../libs/services/api-games-data";

export interface SelectGameProp {
  refereeId: number;
  saveSelectedGame: (selectedGame: Game) => void;
}

function SelectGame(props: SelectGameProp) {
  const gameTypeDescriptionHebrew = ["שלב הבתים", "חצי גמר", "גמר"];

  const { loadListGames } = useApiGamesData();
  const [listRefereeGames, setListRefereeGames] = useState<Array<Game>>([]);

  const [selectedGame, setSelectedGame] = useState<number>(0);

  useEffect(() => {
    load_List_Games();
  }, []);

  const load_List_Games = async () => {
    const response = await loadListGames(props.refereeId);
    if (response && response.isSuccess) {
      setListRefereeGames(response.data);
    } else {
      //todo: error messagae
    }
  };

  const handleChange = (event: any) => {
    setSelectedGame(event.target.value);
  };

  const saveGame = () => {
    props.saveSelectedGame(listRefereeGames[selectedGame]);
  };

  return (
    <section>
      <h3>בחר משחק:</h3>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedGame}
            label="selected game"
            onChange={handleChange}
          >
            {listRefereeGames &&
              listRefereeGames.map((GameData: Game, index: number) => (
                <MenuItem key={index} value={index}>
                  {GameData.teamA.teamName} - {GameData.teamB.teamName} (
                  {gameTypeDescriptionHebrew[GameData.gameType]} )
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>

      <Stack>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={saveGame}
        >
          שמור
        </Button>
      </Stack>
    </section>
  );
}

export default SelectGame;
