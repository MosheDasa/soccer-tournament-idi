import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useApiInformation } from "../libs/services/api-information";
import Layout from "../routes/layout/layout";
import PointsTable from "../routes/general/points-table/points-table";
import Scoreboard from "../routes/general/scoreboard/scoreboard";
import AdminScreen from "../routes/authorized/admin-screen/admin-screen";
import RefereeScreen from "../routes/authorized/referee-screen/referee-screen";
import Login from "../routes/authorized/login/login";
import "../main.css";
import ListGroups from "../routes/general/list-groups/list-groups";
import TeamRoster from "../routes/general/team-roster/team-roster";

function App() {
  const { loadTeams } = useApiInformation();

  useEffect(() => {
    onload();
  }, [""]);

  const onload = async () => {
    await loadTeams();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PointsTable />} />
          <Route path="pointsTable" element={<PointsTable />} />
          <Route path="listGroups" element={<ListGroups />} />
          <Route path="scoreboard" element={<Scoreboard />} />
          <Route path="adminScreen" element={<AdminScreen />} />
          <Route path="refereeScreen" element={<RefereeScreen />} />
          <Route path="teamRoster/:teamid" element={<TeamRoster />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
