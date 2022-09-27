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
import { EventsData } from "../../../../../libs/models/events-data";
import { Game } from "../../../../../libs/models/game";
import { Player, Team } from "../../../../../libs/models/team";
import { UserAccount } from "../../../../../libs/models/user-account";
import { useApiAdmin } from "../../../../../libs/services/api-admin";
import { TableProperties } from "./table_properties";

export default function TablesPanel() {
  const {
    getTablePlayers,
    getTableUser,
    getTableEvents,
    getTableGames,
    getTableTeams,
  } = useApiAdmin();

  const [columnsData, setColumnsData] = useState<GridColumns>();
  const [rowsData, setRowsData] = useState<GridRowsProp>();
  const [tableSelected, setTableSelected] = useState();

  const handleChange = (event: SelectChangeEvent) => {
    const indexTable = event.target.value as string;
    console.log("dasa 1", indexTable);

    switch (+indexTable) {
      case 0:
        setColumnsData(TableProperties.columnsPlayers);
        setTablePlayers();
        break;
      case 1:
        setColumnsData(TableProperties.columnsUser);
        setTableUser();
        break;
      case 2:
        setColumnsData(TableProperties.columnsEvents);
        setTableEvents();
        break;
      case 3:
        setColumnsData(TableProperties.columnsGames);
        setTableGames();
        break;
      case 4:
        setColumnsData(TableProperties.columnsTeams);
        setTableTeams();
        break;
    }
  };

  //#############################################################################
  const setTablePlayers = async () => {
    const tableData = await getTablePlayers();

    const rows = tableData.data.map((player: Player, index: number) => {
      const x = { id: index, ...player };
      return x;
    });
    setRowsData(rows);
  };

  const setTableUser = async () => {
    const tableData = await getTableUser();

    const rows = tableData.data.map((user: UserAccount, index: number) => {
      const x = { id: index, ...user };
      return x;
    });
    setRowsData(rows);
  };

  const setTableEvents = async () => {
    const tableData = await getTableEvents();

    const rows = tableData.data.map((events: EventsData, index: number) => {
      const x = { id: index, ...events };
      return x;
    });
    console.log("dasa", rows);
    setRowsData(rows);
  };

  const setTableGames = async () => {
    const tableData = await getTableGames();

    const rows = tableData.data.map((game: Game, index: number) => {
      const x = { id: index, ...game };
      return x;
    });
    setRowsData(rows);
  };

  const setTableTeams = async () => {
    const tableData = await getTableTeams();

    const rows = tableData.data.map((team: Team, index: number) => {
      const x = { id: index, ...team };
      return x;
    });
    setRowsData(rows);
  };

  //#############################################################################
  const HeaderSelect = () => {
    return (
      <Box sx={{ minWidth: "100%" }}>
        <FormControl fullWidth>
          <Select
            sx={{ marginTop: 5, marginBottom: 5 }}
            id="header-select"
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
      {HeaderSelect()}
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
