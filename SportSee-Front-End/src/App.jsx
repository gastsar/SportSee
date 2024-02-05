/* import { useState, useEffect } from 'react';
import axios from 'axios'; */
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import NavHorizontal from './components/NavHorizontal';
import NavVertical from './components/NavVertical';
import Home from './pages/Home';
import Error from './pages/Error';
import UserSelect from './components/User';

function App() {
 /*  const [defaultUserData, setDefaultUserData] = useState(null);

  useEffect(() => {
    const fetchDefaultUserData = async (userId) => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        setDefaultUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Utilisez l'ID par défaut spécifié dans votre question
    fetchDefaultUserData('defaultUserId');
  }, []);
 */
  return (
    <>
      <Router>
        <NavHorizontal />
        <NavVertical />
        <UserSelect />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route
              index
              element={<Home userData="defaultUserData" />}
            />
          </Route>
          <Route
            path="/user/:id"
            element={<Home />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
