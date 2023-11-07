import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import HomePage from './pages/home';
import Protected from './contexts/protected';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/home" element={<Protected Component={HomePage}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
