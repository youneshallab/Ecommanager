import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes , Route  } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Sidebar/>
    </Router>
    <Routes>
      <Route path='/' />
    </Routes>
    </>
  );
}

export default App;
