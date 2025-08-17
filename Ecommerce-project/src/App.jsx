// App.jsx
import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import Loading from '@components/Loading/Loading';
import AppLoader from '@components/Loading/AppLoader';
import SideBar from '@components/SideBar/SideBar';
import { SideBarProvider } from '@/contexts/SideBarProvider';

function App() {
  return (
    <AppLoader>
      <SideBarProvider>
        <SideBar/>
        <BrowserRouter>
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
  );
}

export default App;
