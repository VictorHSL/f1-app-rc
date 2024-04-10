import HomePage from "@pages/home"
import Sidebar from "@shared/components/Sidebar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
    
  return (
    <div className="text-red-500">
      <BrowserRouter>
        <Sidebar>
          
        </Sidebar>
        {/* <Routes>
            <Route path="/" Component={HomePage} />
        </Routes> */}
      </BrowserRouter>
    </div>
  )
}

export default App
