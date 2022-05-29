import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from 'src/layouts';
import { allRoutes } from './routes';

export const AppRouter: React.FC = () => (
  <MainLayout>
    <Routes>
      {allRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={React.createElement(route.element)} />
      ))}
    </Routes>
  </MainLayout>
);
