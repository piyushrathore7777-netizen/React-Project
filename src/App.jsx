import video from "./assets/myvideo.mp4";
import { Link } from 'react-router'
import { BrowserRouter,Routes,Route } from "react-router";
import Home from './assets/screens/Home.jsx'
import GetStarted from "./assets/screens/GetStarted.jsx";
import Agee from "./assets/screens/Agee.jsx";
import image1 from "./assets/image1.webp";
import Arrow from "./assets/Arrow(1).svg";
import image2 from "./assets/image2.webp";
import image3 from "./assets/image3.webp";
import image4 from "./assets/image4.webp";
import image5 from "./assets/Ageeimage.png";
import Age from "./assets/screens/Age.jsx";
import Age3 from "./assets/screens/Age3.jsx";
import Age4 from "./assets/screens/Age4.jsx";
import Age3image from "./assets/Age3image.png";

function App() {

  return ( 
    
    
  
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
   <Route path="/getstarted" element={<GetStarted></GetStarted>}></Route>
    <Route path="/Agee" element={<Agee></Agee>}></Route>
    <Route path="/Age" element={<Age></Age>}></Route>
    <Route path="/Age3" element={<Age3></Age3>}></Route>
     <Route path="/Age4" element={<Age4></Age4>}></Route>
</Routes>
</BrowserRouter>
    
    

    
 
      )
}

export default App
