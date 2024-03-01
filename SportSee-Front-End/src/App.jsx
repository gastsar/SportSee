import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavHorizontal from './components/NavHorizontal';
import NavVertical from './components/NavVertical';
import Home from './pages/Home';
import Error from './pages/Error';
import UserSelect from './components/User';

function App() {

  return (
    <>
      <Router>
        <NavHorizontal />
        <NavVertical />
        <UserSelect />
        <Routes>
          <Route
            path="/user/:id/dashboard"
            element={<Home />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
