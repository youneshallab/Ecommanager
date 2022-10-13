import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes , Route  } from 'react-router-dom';
import Layout from './Components/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
