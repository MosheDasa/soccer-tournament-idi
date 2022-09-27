import { Stack, Button } from "@mui/material";

function ActionPanal() {
  const handleSelectedGroup = async () => {
    console.log("dasa11");
  };

  return (
    <>
      <Stack direction="row" spacing={0}>
        <Button
          onClick={(e) => handleSelectedGroup()}
          variant="contained"
          sx={{ fontSize: 24, margin: 5 }}
        >
          הגרלת בתים
        </Button>

        <Button
          onClick={(e) => handleSelectedGroup()}
          variant="contained"
          color="error"
          sx={{ fontSize: 24, margin: 5 }}
        >
          איפוס טורניר
        </Button>
      </Stack>
    </>
  );
}

export default ActionPanal;
