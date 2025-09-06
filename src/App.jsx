import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Sidebar from "./components/Sidebar";
import Feed from "./pages/Feed";
import Suggestion from "./pages/Suggestion";

function App() {

  return (
   <div className="flex h-screen w-full ">
    <div className='w-72 '><Sidebar /></div>
    <h1 className="w-1/2"><Feed/></h1>
    <h2 className="w-90"><Suggestion/></h2>
   </div>
  )
}

export default App;
