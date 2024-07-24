import React, { createContext, useState } from "react";

export const PropertyIdContext = createContext();

export const PropertyIdProvider = ({ children }) => {
  const [propertyId, setPropertyId] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  const updatePropertyId = (id) => {
    setPropertyId(id);
    setLoading(false);
  };

  return (
    <PropertyIdContext.Provider
      value={{ propertyId, updatePropertyId, loading, setLoading }}
    >
      {children}
    </PropertyIdContext.Provider>
  );
};
