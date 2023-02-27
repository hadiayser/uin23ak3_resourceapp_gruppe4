import logo from './logo.svg';
import './css/main.css';
import Main from './Components/Main';
import ArticleCard from './Components/ArticleCard';
import H1 from './Components/H1';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route index element={<Main />} /> 
      <Route path="main" element={<Main />} />
    </Routes>
  );
}

export default App;
