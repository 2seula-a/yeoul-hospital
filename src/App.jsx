import {HashRouter,Routes,Route,useLocation} from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Care from "./pages/Care.jsx";
import Guide from "./pages/Guide.jsx";
import Notices from "./pages/Notices.jsx";
import Team from "./pages/Team.jsx";
import TeamInternalMedicine from "./pages/TeamInternalMedicine.jsx";
import TeamOrthopedics from "./pages/TeamOrthopedics.jsx";
import TeamFamilyMedicine from "./pages/TeamFamilyMedicine.jsx";
import Tour from "./pages/Tour.jsx";
function Pages(){return <SiteLayout><Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/care" element={<Care/>} />
<Route path="/guide" element={<Guide/>} />
<Route path="/notices" element={<Notices/>} />
<Route path="/team" element={<Team/>} />
<Route path="/team-internal-medicine" element={<TeamInternalMedicine/>} />
<Route path="/team-orthopedics" element={<TeamOrthopedics/>} />
<Route path="/team-family-medicine" element={<TeamFamilyMedicine/>} />
<Route path="/tour" element={<Tour/>} />
<Route path="*" element={<Home/>}/>
</Routes></SiteLayout>}
export default function App(){return <HashRouter><Pages/></HashRouter>}
