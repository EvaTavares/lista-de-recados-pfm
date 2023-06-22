import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ErrandHome from '../pages/ErrandHome';

const AppRoutes: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/errandHome" element={<ErrandHome />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default AppRoutes;
