import { ResponseData } from "../models/generta";
import { GroupPointsData } from "../models/summary-points-table";

export const useApiPointsTable = () => {
  // ---------------- PointsTable ----------------
  const getSummaryPointsTable = async () => {
    //"/mock/summaryPointsTable.json"
    return fetch(process.env.REACT_APP_URL_API + "/xxxxx").then((res) =>
      res.json().then((response: ResponseData<Array<GroupPointsData>>) => {
        return response;
      })
    );
  };

  return {
    getSummaryPointsTable,
  };
};
