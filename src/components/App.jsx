import { Routes, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}></Route>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
