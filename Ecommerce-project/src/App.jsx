// App.jsx
import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import Loading from '@components/Loading/Loading';
import AppLoader from '@components/Loading/AppLoader';
import SideBar from '@components/SideBar/SideBar';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import ToastProvider from '@/contexts/ToastProvider';
import { StoreContextProvider } from '@/contexts/storeProvider';
import '@splidejs/react-splide/css'; 
function App() {
  return (
    <StoreContextProvider>
      <ToastProvider>
        <AppLoader>
          <SideBarProvider>
            <BrowserRouter>
              <SideBar />
              <Routes>
                {routers.map((item, index) => (
                  <Route
                    path={item.path}
                    element={<item.component />}
                    key={index}
                  />
                ))}
              </Routes>
            </BrowserRouter>
          </SideBarProvider>
        </AppLoader>
      </ToastProvider>
    </StoreContextProvider>
  );
}

export default App;
