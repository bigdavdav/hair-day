import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "./pages/HomePage";
import { HomePageLayout } from "./pages/HomePageLayout";
import { ComponentsPage } from "./pages/ComponentsPage";
import { AppContextProvider } from "./appContext";

export function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<Home />} />
            <Route path="/components" element={<ComponentsPage />} />
          </Route>
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  )
}
