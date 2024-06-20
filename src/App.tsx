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
            <main className="flex w-full mt-2 ">              
              <div className="flex flex-col w-full rounded-lg bg-neutral-900 mx-2 md:mx-0 md:mr-2">
                <Header></Header>
                <div className="h-full  m-2 items-center overflow-y-auto scroll-smooth no-scrollbar">
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
