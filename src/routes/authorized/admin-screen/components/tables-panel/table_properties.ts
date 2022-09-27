export class TableProperties {
  static headerButton = [
    "שחקנים",
    "צוותים",
    "משחקים",
    "משתמשים",
    "אירועים",
    "טבלת ניקוד",
    "לוגים",
  ];

  static columnsUser = [
    { field: "UserId", headerName: "XXXXXXXX", width: 50, editable: true },
    { field: "FullName", headerName: "XXXXXXXX", width: 180, editable: true },
    { field: "Permission", headerName: "XXXXXXXX", width: 180, editable: true },
    { field: "Permission", headerName: "XXXXXXXX", width: 50, editable: true },
  ];
  static columnsPlayers = [
    { field: "playerId", headerName: "מספר חולצה", width: 180, editable: true },
    { field: "fullName", headerName: "שם מלא", width: 180, editable: true },
    { field: "teamID", headerName: "מזהה קובצה", width: 180, editable: true },
  ];
  static columnsEvents = [];
  static columnsGames = [];
  static columnsTeams = [];
}
