import Home from "./assets/Components/Pages/Home";
import Contact from "./assets/Components/Pages/Contact";
import Services from "./assets/Components/Pages/Services";
import Notfound from "./assets/Components/Pages/Notfound";
import About from "./assets/Components/Pages/About";
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='Contact' element={<Contact/>}/>
      <Route path='Services' element={<Services/>}/>
      <Route path='About' element={<About/>}/>
      {/* not found page */}
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
   
    
  )
}
export default App
