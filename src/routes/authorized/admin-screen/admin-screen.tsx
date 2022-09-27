import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { PermissionType } from "../../../libs/models/permission";
import { useApiAuth } from "../../../libs/services/api-auth";
import ActionPanal from "./components/action-panal/action-panal";
import LoggersPanel from "./components/loggers-panel/loggers-panel";
import TablesPanel from "./components/tables-panel/tables-panel";

function AdminScreen() {
  const { logout, isLogin } = useApiAuth();
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  useEffect(() => {
    const login = isLogin([PermissionType.admin]);
    if (!login) {
      logout();
    }
  }, []);

  return (
    <>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="פעולות" />
        <Tab label="טבלות" />
      </Tabs>
      {value === 0 && <ActionPanal></ActionPanal>}
      {value === 1 && <TablesPanel></TablesPanel>}
    </>
  );
}

export default AdminScreen;
