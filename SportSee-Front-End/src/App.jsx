
import NavHorizontal from './components/Nav/NavHorizontal';
import NavVertical from './components/Nav/NavVertical';
import UserSelect from './components/User/index';
import  Router  from './Router'; 

function App() {
  return (
    <>
      <NavHorizontal />
      <NavVertical />
      <UserSelect />
      <Router /> 
    </>
  );
}

export default App;
