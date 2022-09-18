import {
  Autocomplete,
  Button,
  ButtonGroup,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

function RefereeScreen() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const top100Films = [
    { label: "The Shawshank Redemption 3", year: 1994 },
    { label: "The Godfather 5", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];

  return (
    <>
      <h1> RefereeScreen</h1>

      <div>
        <p>בחר משחק:</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="error">
            המשחק מסתיים
          </Button>
          <Button variant="contained" color="success">
            המשחק מתחיל
          </Button>
        </Stack>
      </div>
      <div>
        <p>למי להוסיף נקודה?</p>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button>One</Button>
          <Button>Two</Button>
        </ButtonGroup>

        <p>מי הכניס את הגול?</p>

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </div>
    </>
  );
}

export default RefereeScreen;
