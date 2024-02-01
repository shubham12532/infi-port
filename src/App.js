import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import StaticDataFund from "./Screens/Fund/StaticDataFund";
import Broker from "./Screens/Broker/Broker";
import CounterParty from "./Screens/CounterParty/CounterParty";
import LoginPage from "./Screens/login/LoginPage";
import Custodian from "./Screens/Custodian/Custodian";
import Exchange from "./Screens/Exchange/Exchange";
import Country from "./Screens/Country/Country";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoginSuccessfull, setLoginSuccessfull] = useState(false);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [fundSubMenuOpen, setFundSubMenuOpen] = useState(false);

  const toggleFundSubMenu = () => {
    setFundSubMenuOpen(!fundSubMenuOpen);
  };

  const checkLoginStatus = () =>{
    setLoginSuccessfull(true);
  }

  const openSideBar = () =>{
    setSideBarOpen(!isSideBarOpen);
  }

  return (
    
    <ColorModeContext.Provider value={colorMode}>
     {!isLoginSuccessfull ?(<LoginPage/>):

     ( <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{overflow:'hidden'}}>
          <Sidebar isSidebarOpen={isSideBarOpen} />
          <main className="content">
            <Topbar setSideBarOpen={openSideBar} />
            <Routes>
              <Route path="/fund" element={<StaticDataFund/>} />
              <Route path="/Custodian" element={<Custodian/>} />  
              <Route path="/broker" element={<Broker/>} />
              <Route path="/exchange" element={<Exchange/>} />
              <Route path="/country" element={<Country/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>)}
    </ColorModeContext.Provider>
  );
}

export default App;
