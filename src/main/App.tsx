import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../routes/layout";
import PointsTable from "../routes/points-table";
import Scoreboard from "../routes/scoreboard";
import TeamRoster from "../routes/team-roster";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PointsTable />} />
            <Route path="teamroster" element={<TeamRoster />} />
            <Route path="scoreboard" element={<Scoreboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
