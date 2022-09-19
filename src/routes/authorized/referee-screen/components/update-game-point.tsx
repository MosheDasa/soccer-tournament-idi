import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";

export interface updateGameResultProp {
  // saveStatueGame: (gameStatus: GameStatusType) => void;
}

function UpdateGamePointComp() {
  const [selectedPlayer, setSelectedPlayer] = useState<number>(-1);

  const listPlayer = ["שלב הבתים", "חצי גמר", "גמר"];

  const handleChange = (event: any) => {
    setSelectedPlayer(event.target.value);
  };

  const updateGamePoint = () => {
    console.log("dasa");
  };

  return (
    <>
      <section>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined">Primary</Button>
        </Stack>
      </section>
      <section>
        <h3>מי הכניס את הגול?</h3>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedPlayer}
              label="selected game"
              onChange={handleChange}
            >
              {listPlayer &&
                listPlayer.map((GameData: string, index: number) => (
                  <MenuItem key={index} value={index}>
                    {index}
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
            onClick={updateGamePoint}
          >
            שמור
          </Button>
        </Stack>
      </section>
    </>
  );
}

export default UpdateGamePointComp;
