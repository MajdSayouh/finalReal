// import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import HomePage from "./components/homePage/HomePage";
import Details from "./Pages/Details/Details";
import Rent from "./Pages/Rent/Rent";
import Login from "./Auth/Login";
import "./App.css";
import UserProfile from "./features/user/UserProfile";
import VerifyEmail from "./Auth/VerifyEmail";
import Dashboard from "./Pages/dashboard/Dashboard";
import RequireAuth from "./Auth/RequireAuth";
import AddProperty from "./features/property/AddProperty";
import MyProperties from "./features/user/MyProperties";
import RentPage from "./features/rent/RentPage";
import AddImageProperty from "./features/property/AddImageProperty";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Auth */}
          <Route path={"/sign-up"} element={<SignUp />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/verify"} element={<VerifyEmail />} />

          <Route path={"/"} element={<HomePage />} />
          <Route path={"/details/:slug"} element={<Details />} />
          <Route path={"/rent"} element={<RentPage />}></Route>

          <Route element={<RequireAuth />}>
            <Route path={"/profile"} element={<UserProfile />} />
            <Route path={"/my-properties"} element={<MyProperties />} />

            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route
              path={"/dashboard/add-a-property"}
              element={<AddProperty />}
            />
            <Route
              path={"/dashboard/add-image-property"}
              element={<AddImageProperty />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
