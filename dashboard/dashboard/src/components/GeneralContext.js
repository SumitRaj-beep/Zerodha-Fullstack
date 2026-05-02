import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // OPEN BUY WINDOW
  const handleOpenBuyWindow = (uid) => {
    console.log("OPEN CALLED", uid); // debug
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // CLOSE BUY WINDOW
  const handleCloseBuyWindow = () => {
    console.log("CLOSE CALLED"); // debug
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}

      {/* BUY WINDOW RENDER */}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;