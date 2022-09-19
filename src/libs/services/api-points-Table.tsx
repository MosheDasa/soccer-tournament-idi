import { ResponseData } from "../models/generta";
import { GroupPointsData } from "../models/summary-points-table";

export const useApiPointsTable = () => {
  // ---------------- PointsTable ----------------
  const getSummaryPointsTable = async () => {
    return fetch("/mock/summaryPointsTable.json").then((res) =>
      res.json().then((response: ResponseData<Array<GroupPointsData>>) => {
        return response;
      })
    );
  };

  return {
    getSummaryPointsTable,
  };
};
