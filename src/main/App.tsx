import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useApiInformation } from "../libs/services/api-information";
import Layout from "../routes/layout/layout";
import PointsTable from "../routes/general/points-table/points-table";
import TeamRoster from "../routes/general/team-roster/team-roster";
import Scoreboard from "../routes/general/scoreboard/scoreboard";
import AdminScreen from "../routes/authorized/admin-screen/admin-screen";
import RefereeScreen from "../routes/authorized/referee-screen/referee-screen";
import Login from "../routes/authorized/login/login";
import "../main.css";

function App() {
  const { loadTeams, loadGame } = useApiInformation();

  useEffect(() => {
    loadTeams();
    //loadGame();
  }, [""]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PointsTable />} />
            <Route path="pointsTable" element={<PointsTable />} />
            <Route path="teamroster" element={<TeamRoster />} />
            <Route path="scoreboard" element={<Scoreboard />} />
            <Route path="adminScreen" element={<AdminScreen />} />
            <Route path="refereeScreen" element={<RefereeScreen />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
