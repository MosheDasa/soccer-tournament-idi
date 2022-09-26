import { useEffect } from "react";
import { PermissionType } from "../../../libs/models/permission";
import { useApiAuth } from "../../../libs/services/api-auth";

function AdminScreen() {
  const { logout, isLogin } = useApiAuth();

  useEffect(() => {
    const login = isLogin([PermissionType.admin]);
    if (!login) {
      logout();
    }
  }, []);

  return (
    <>
      <h4> AdminScreen</h4>
      <h1> בקרוב....</h1>
    </>
  );
}

export default AdminScreen;
