import video from "./assets/myvideo.mp4";
import { Link } from 'react-router'
import { BrowserRouter,Routes,Route } from "react-router";
import Home from './assets/screens/Home.jsx'
import GetStarted from "./assets/screens/GetStarted.jsx";
import image1 from "./assets/image1.webp";
import Arrow from "./assets/Arrow(1).svg";
import image2 from "./assets/image2.webp";
import image3 from "./assets/image3.webp";
import image4 from "./assets/image4.webp";

function App() {

  return ( 
    
    
  
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
   <Route path="/getstarted" element={
    <GetStarted></GetStarted>
   }></Route>
</Routes>
</BrowserRouter>
    
    

    
 
      )
}

export default App
