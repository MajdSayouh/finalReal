// import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import HomePage from "./Pages/homePage/HomePage";
import Details from "./Pages/Details/Details";
import Login from "./Auth/Login";
import "./App.css";
import UserProfile from "./features/user/UserProfile";
import VerifyEmail from "./Auth/VerifyEmail";
import Dashboard from "./Pages/dashboard/Dashboard";
import RequireAuth from "./Auth/RequireAuth";
import AddProperty from "./features/property/AddProperty";
import RentPage from "./features/rent/RentPage";
import AddImageProperty from "./features/property/AddImageProperty";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PropertyIdLayout from "./features/property/PropertyIdLayout";
import UserProperties from "./features/user/UserProperties";
import UserAdedProperties from "./features/user/UserAdedProperties";
import UserFavorites from "./features/user/UserFavorites";

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

            <Route element={<PropertyIdLayout />}>
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
            <Route path={"/my-properties"} element={<UserProperties />}>
              <Route
                index
                path={"/my-properties/my-added-properties"}
                element={<UserAdedProperties />}
              />
              <Route
                path={"/my-properties/my-favorites"}
                element={<UserFavorites />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
