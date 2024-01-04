import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import StaticDataFund from "./Screens/Fund/StaticDataFund";

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
     {/* {!isLoginSuccessfull ?(<LoginPage/>): */}

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebarOpen={isSideBarOpen} />
          <main className="content">
            <Topbar setSideBarOpen={openSideBar} />
            <Routes>
              <Route path="/" element={<StaticDataFund />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
