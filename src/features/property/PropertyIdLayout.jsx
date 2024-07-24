import { Outlet } from "react-router-dom";
import { PropertyIdProvider } from "../../context/PropertyIdContext"; // Adjust the import path as necessary

const PropertyIdLayout = () => {
  return (
    <PropertyIdProvider>
      <Outlet />
    </PropertyIdProvider>
  );
};

export default PropertyIdLayout;
