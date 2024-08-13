/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filter, setFilter] = useState({
    title: "",
    city: "",
    price: null,
    property_type: "",
    property_status: "",
    ownership_type: "",
    covering: "",
    plot_area: null,
    price_lt: null,
    price_gt: null,
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
function useFilter() {
  const context = useContext(FilterContext);
  return context;
}

export { FilterContext, FilterProvider, useFilter };
