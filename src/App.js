import './css/main.css';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main category="html" />} />
      <Route path="html" element={<Main category="html" />} />
      <Route path="/css" element={<Main category="css" />} />
      <Route path="/javascript" element={<Main category="javascript" />} />
      <Route path="/react" element={<Main category="react" />} />
      <Route path="/headless-cms" element={<Main category="headless-cms" />} />
    </Routes>
  );
}

export default App;
