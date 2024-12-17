import React, { useState, useEffect } from "react";
import { FullScreenHandle } from "react-full-screen";

import RevenueView from "pages/Revenue/revenueView";
import StockView from "pages/Stock/stockView";

type props = {
  fullscreenHandle: FullScreenHandle
}

// Telas fictícias para o exemplo
const screens = [
  <div ><RevenueView/> </div>,
  <div ><StockView/></div>,
];

const BIShowcase = (props:props) => {
  const {fullscreenHandle} = props
  const [currentScreen, setCurrentScreen] = useState(0);

  // Avança para a próxima tela após um tempo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prevScreen) => (prevScreen + 1) % screens.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <i onClick={fullscreenHandle.exit} className="far fa-times-circle modetv-close-icon"></i>
            <div className="pt-1 var(--bs-body-bg)">
                {screens[currentScreen]} 
            </div>
    </div>
  );
};

export default BIShowcase;
