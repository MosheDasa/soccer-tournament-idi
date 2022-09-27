export class TableProperties {
  static headerButton = [
    "שחקנים",
    "משתמשים",
    "אירועים",
    "משחקים",
    "צוותים",
    "טבלת ניקוד",
    "לוגים",
  ];

  static columnsUser = [
    { field: "userId", headerName: "מזהה לקוח", width: 50, editable: true },
    { field: "fullName", headerName: "שם מלא", width: 180, editable: true },
    { field: "permission", headerName: "הרשאה", width: 180, editable: true },
  ];
  static columnsPlayers = [
    { field: "playerId", headerName: "מספר חולצה", width: 180, editable: true },
    { field: "fullName", headerName: "שם מלא", width: 180, editable: true },
    { field: "teamID", headerName: "מזהה קובצה", width: 180, editable: true },
  ];
  static columnsEvents = [
    {
      field: "userId",
      headerName: "מזהה יוזם האירוע",
      width: 180,
      editable: true,
    },
    { field: "eventId", headerName: "מזהה אירוע", width: 180, editable: true },
    {
      field: "typeEvent",
      headerName: "סוג האירוע",
      width: 180,
      editable: true,
    },
    { field: "playerId", headerName: "מזהה קבוצה", width: 180, editable: true },
    { field: "gameId", headerName: "מזהה משחק", width: 180, editable: true },
    {
      field: "updateDate",
      headerName: "תאריך עדכון",
      width: 180,
      editable: true,
    },
    {
      field: "insrtDate",
      headerName: "תאריך רישום",
      width: 180,
      editable: true,
    },
  ];
  static columnsGames = [
    { field: "gameId", headerName: "מזהה משחק", width: 180, editable: true },
    {
      field: "teamAId",
      headerName: "מזהה קובצה 1",
      width: 180,
      editable: true,
    },
    {
      field: "teamAGol",
      headerName: "גולים קבוצה 1",
      width: 180,
      editable: true,
    },
    {
      field: "teamBId",
      headerName: "מזהה קובצה 2",
      width: 180,
      editable: true,
    },
    {
      field: "teamBGol",
      headerName: "גולים קבוצה 2",
      width: 180,
      editable: true,
    },
    { field: "userId", headerName: "מזהה שופט", width: 180, editable: true },
    {
      field: "gameStatus",
      headerName: "סטטוס משחק",
      width: 180,
      editable: true,
    },
    { field: "gameType", headerName: "סוג משחק", width: 180, editable: true },
    {
      field: "insrtDate",
      headerName: "תאריך רישום",
      width: 180,
      editable: true,
    },
    {
      field: "updateDate",
      headerName: "תאריך עדכון",
      width: 180,
      editable: true,
    },
  ];
  static columnsTeams = [
    { field: "teamID", headerName: "מזהה קבוצה", width: 180, editable: true },
    { field: "teamName", headerName: "שם הקבוצה", width: 180, editable: true },
    { field: "teamCoach", headerName: "שם המאמן", width: 180, editable: true },
    { field: "batyam", headerName: "בית", width: 180, editable: true },
  ];
}
