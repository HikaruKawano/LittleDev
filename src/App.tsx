import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ConnectPage from "./pages/ConnectPage";
import CreateAcountPage from "./pages/CreateAcountPage";
import AboutPage from "./pages/AboutPage";
import Download from "./pages/DownloadPage";


function App() {
  return (
    <BrowserRouter>
       <Routes>
           <Route Component = { HomePage }  path="/" />
           <Route Component = { ConnectPage }  path="/Connect" />
           <Route Component = { CreateAcountPage } path="/CreateAcount" />
           <Route Component = { AboutPage } path="/About" />
           <Route Component = { Download } path="/Download" />
           </Routes>
       </BrowserRouter>
  );
}

export default App;
