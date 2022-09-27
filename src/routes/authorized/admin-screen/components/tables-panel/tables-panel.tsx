import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DataGrid, GridColumns, GridRowsProp } from "@mui/x-data-grid";

import { useEffect, useState } from "react";
import { Player } from "../../../../../libs/models/team";
import { useApiAdmin } from "../../../../../libs/services/api-admin";
import { TableProperties } from "./table_properties";

export default function TablesPanel() {
  const { getTablePlayers } = useApiAdmin();
  const [columnsData, setColumnsData] = useState<GridColumns>();
  const [rowsData, setRowsData] = useState<GridRowsProp>();
  const [tableSelected, setTableSelected] = useState();

  useEffect(() => {
    setColumnsData(TableProperties.columnsPlayers);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    const xx = event.target.value as string;
    console.log("dasa handleChange", xx);
    setTablePlayers();
  };

  const handleSelectedGroup = async (indexTable: number) => {
    setTablePlayers();
    // switch (indexTable) {
    //   case 1:
    //     break;
    //   default:
    //     break;
    // }
  };

  const setTablePlayers = async () => {
    const tableData = await getTablePlayers();

    const rows = tableData.data.map((player: Player, index: number) => {
      const x = {
        id: index,
        playerId: player.playerId,
        fullName: player.fullName,
        teamID: player.teamID,
      };
      return x;
    });
    console.log(rows);
    setRowsData(rows);
  };

  const HeaderButton = () => {
    return (
      <Box sx={{ minWidth: "100%" }}>
        <FormControl fullWidth>
          <Select
            sx={{ marginTop: 5 }}
            id="demo-simple-select"
            value={tableSelected}
            onChange={handleChange}
          >
            {TableProperties.headerButton.map(
              (buttonText: string, index: number) => (
                <MenuItem value={index}>{buttonText}</MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Box>
    );
  };

  return (
    <>
      {HeaderButton()}
      <div style={{ height: 800, width: "100%" }}>
        {columnsData && rowsData && (
          <DataGrid
            rows={rowsData}
            columns={columnsData}
            experimentalFeatures={{ newEditingApi: true }}
          />
        )}
      </div>
    </>
  );
}
