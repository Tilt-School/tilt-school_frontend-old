import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from 'src/layouts';
import { routes } from './routes';

export const AppRouter: React.FC = () => (
  <Routes>
    <MainLayout>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </MainLayout>
  </Routes>
);
