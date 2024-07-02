import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
function RequireAuth() {
  const token = Cookie().get("Token");
  const navigate = useNavigate();
  console.log(token);
  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token]);
  return token ? <Outlet /> : navigate("/login");
}

export default RequireAuth;
