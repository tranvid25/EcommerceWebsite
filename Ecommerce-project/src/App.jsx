// App.jsx
import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import Loading from '@components/Loading/Loading';
import AppLoader from '@components/Loading/AppLoader';

function App() {
  return (
    <AppLoader>
      <BrowserRouter>
        <Routes>
          {routers.map((item, index) => (
            <Route path={item.path} element={<item.component />} key={index} />
          ))}
        </Routes>
      </BrowserRouter>
    </AppLoader>
  );
}

export default App;
