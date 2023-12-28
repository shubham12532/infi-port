import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoginSuccessfull, setLoginSuccessfull] = useState(false);

  const checkLoginStatus = () =>{
    setLoginSuccessfull(true);
  }

  return (
    
    <ColorModeContext.Provider value={colorMode}>
     {/* {!isLoginSuccessfull ?(<LoginPage/>): */}

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
