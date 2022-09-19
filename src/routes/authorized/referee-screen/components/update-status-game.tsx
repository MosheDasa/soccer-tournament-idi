import { Stack, Button } from "@mui/material";
import { GameStatusType } from "../../../../libs/models/game";

export interface UpdateStatusGameProp {
  gameStatus: GameStatusType;
  saveStatueGame: (gameStatus: GameStatusType) => void;
}

function UpdateStatusGameComp(props: UpdateStatusGameProp) {
  const saveStatueGame = (gameStatus: GameStatusType) => {
    props.saveStatueGame(gameStatus);
  };

  const variant =
    props.gameStatus !== GameStatusType.Started ? "contained" : "outlined";

  const color =
    props.gameStatus !== GameStatusType.Started ? "success" : "error";

  const textBut =
    props.gameStatus !== GameStatusType.Started ? "התחל משחק" : "סיום משחק";

  return (
    <Stack spacing={2}>
      <Button
        onClick={(e) => saveStatueGame(GameStatusType.Started)}
        variant={variant}
        color={color}
      >
        {textBut}
      </Button>
    </Stack>
  );
}

export default UpdateStatusGameComp;
