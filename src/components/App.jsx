import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import BookPage from '../pages/BookPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book" element={<BookPage />} />
    </Routes>
  );
}

export default App;
