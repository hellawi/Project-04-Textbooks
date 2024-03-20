import { Routes, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import BookPage from '../pages/BookPage';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/book" element={<BookPage />} />
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
