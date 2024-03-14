import logo from './logo.svg';
import './App.css';
import FirstPage from './firstPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './signIn';
import SignUp from './signUp';

function App() {
  return (
    
    
<Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>


  );
}

export default App;
