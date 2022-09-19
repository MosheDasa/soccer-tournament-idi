import { Paper, Stack, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Scoreboard() {
  return (
    <>
      <h4> Scoreboard</h4>
      <h1> בקרוב....</h1>

      <Stack direction="row" spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </>

    // <>
    //   <h1>בית א</h1>
    //   <GameResult
    //     gameStatus={GameStatusType.notStarted}
    //     pointsTeamA={2}
    //     pointsTeamB={0}
    //     teamAId={1}
    //     teamBId={2}
    //   ></GameResult>

    //   <GameResult
    //     gameStatus={GameStatusType.notStarted}
    //     pointsTeamA={4}
    //     pointsTeamB={1}
    //     teamAId={4}
    //     teamBId={3}
    //   ></GameResult>

    //   <h1>בית ב</h1>
    //   <GameResult
    //     gameStatus={GameStatusType.notStarted}
    //     pointsTeamA={2}
    //     pointsTeamB={0}
    //     teamAId={1}
    //     teamBId={2}
    //   ></GameResult>

    //   <GameResult
    //     gameStatus={GameStatusType.notStarted}
    //     pointsTeamA={4}
    //     pointsTeamB={1}
    //     teamAId={4}
    //     teamBId={3}
    //   ></GameResult>
    // </>
  );
}

export default Scoreboard;
