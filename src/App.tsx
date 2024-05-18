import FeedPage from "@pages/feed/Feed"
import HomePage from "@pages/home/Home"
import Sidebar from "@shared/components/sidebar/Sidebar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoutes } from "./app-routes"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { IocManager, IocManagerServices } from "./services/dependency-injection"

function App() {

  const queryClient = new QueryClient();
  const dependencies: IocManagerServices = {
  };
    
  return (
    <QueryClientProvider client={queryClient}>
      <IocManager.Provider value={dependencies}>
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
      </IocManager.Provider>
    </QueryClientProvider>
    
  )
}

export default App
