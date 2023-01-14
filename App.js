import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import Login from './components/Login';

function App() {

  /*const [user, setUser] = useState();
  console.log(user);*/
  return ( 
    <Router>
      <div className="App">
              <Routes>
                <Route path='/chatpage' element={<ChatPage />} />
                <Route path='/' element={<Home />} />
                <Route path='/Login' element={<Login />} />
              </Routes>
      </div>
    </Router>
  );
}

export default App;
