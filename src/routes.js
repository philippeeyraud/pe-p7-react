import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Survey'
import Error from "./components/Error"
import Freelances from './pages/Freelances'
import { Routes, Route  } from 'react-router-dom'
import GlobalStyle from "./pages/utils/style/GlobalStyle.js";


const app = ()=>{
 
    return (
   <Routes>
  
        <Route exact path="/" element = {<><Home></Home>  </> }/>
       
        <Route  path="/survey/:questionNumber" element = {<><Survey></Survey> </> }/>
        <Route  path="/freelances" element = {<><Freelances></Freelances> </> }/>
        <Route  path="/results" element = {<><Results></Results> </> }/>
        <Route path="/:error" element = {<><Error></Error> </> }/>
        <Route path="/:GlobalStyle" element = {<><GlobalStyle></GlobalStyle> </> }/>
     
    </Routes>
  

   
)}
export default app;
