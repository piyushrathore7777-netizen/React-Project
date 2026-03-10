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
import Continue from "./assets/screens/Continue.jsx";
import Yes from "./assets/screens/Yes.jsx";
import No from "./assets/screens/No.jsx";
import Component from "./assets/screens/Component.jsx";
import Ageec from './assets/screens/Ageec.jsx';
import Ageeyes from "./assets/screens/Ageeyes.jsx";
import Ageeno from "./assets/screens/Ageeno.jsx";
import Agee3c from "./assets/screens/Agee3c.jsx";
// import imageyes from "./assets/screens/imageYes.webp";
import Age3yes from "./assets/screens/Age3yes.jsx";
import Age3no from "./assets/screens/Age3no.jsx";
import Agegoal from "./assets/screens/Agegoal.jsx";
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
     <Route path="/continue" element={<Continue></Continue>}></Route>
     <Route path="/Yes" element={<Yes></Yes>}></Route>
     <Route path="/No" element={<No></No>}></Route>
     <Route path="/Ageec" element={<Ageec></Ageec>}></Route>
     <Route path="/Ageeyes" element={<Ageeyes></Ageeyes>}></Route>
     <Route path="/Ageeno" element={<Ageeno></Ageeno>}></Route>
     <Route path="/Age3c" element={<Agee3c></Agee3c>}></Route>
     <Route path="/Age3yes" element={<Age3yes></Age3yes>}></Route>
     <Route path="/Age3no" element={<Age3no></Age3no>}></Route>
     <Route path="/Agegoal" element={<Agegoal></Agegoal>}></Route>
     
</Routes>
</BrowserRouter>
    
    

    
 
      )
}

export default App
