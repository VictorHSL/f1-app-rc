import FeedPage from "@pages/feed/Feed"
import HomePage from "@pages/home/Home"
import Sidebar from "@shared/components/sidebar/Sidebar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "./app-routes"

function App() {
    
  return (
    <div className="text-red-500 flex h-full">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <main className="h-full flwx-1 overflow-y-auto py-2">
          <Routes>
            <Route path={AppRoutes.Home} Component={HomePage} />
            <Route path={AppRoutes.Feed} Component={FeedPage} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
