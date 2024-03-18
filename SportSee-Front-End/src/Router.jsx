import {  Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';

 const Router = () => {
  return (
  
      <Routes>
        <Route path="/user/:id/dashboard" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
  
  );
};

export default Router