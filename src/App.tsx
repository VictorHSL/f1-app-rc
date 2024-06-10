import FeedPage from "@pages/feed/Feed"
import HomePage from "@pages/home/Home"
import Sidebar from "@shared/components/sidebar/Sidebar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "./app-routes"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { IocManagerProvider } from "./services/dependency-injection"
import { Header } from "@shared/components/header/Header"

function App() {

  const queryClient = new QueryClient();
    
  return (
    <QueryClientProvider client={queryClient}>
      <IocManagerProvider>
        <div className="text-red-500 flex h-full">
          <BrowserRouter>
            <Sidebar></Sidebar>
            <main>
              <div className="rounded-lg h-full overflow-y-auto my-2 scroll-smooth no-scrollbar">
                <Header></Header>
                <div className="">
                  <Routes>
                    <Route path={AppRoutes.Home} Component={HomePage} />
                    <Route path={AppRoutes.Feed} Component={FeedPage} />
                  </Routes>
                </div>
              </div>
            </main>
          </BrowserRouter>
        </div>
      </IocManagerProvider>
    </QueryClientProvider>
    
  )
}

export default App
