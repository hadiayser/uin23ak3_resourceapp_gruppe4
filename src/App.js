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
      <Route path="/" element={<Main category="html" />} />
      <Route path="html" element={<Main category="html" />} />
      <Route path="/css" element={<Main category="css" />} />
      <Route path="/react" element={<Main category="react" />} />
      <Route path="/headless-cms" element={<Main category="headles-cms" />} />
    </Routes>
  );
}

export default App;
