import { Routes, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import BookPage from '../pages/BookPage';
import SubjectPage from '../pages/SubjectPage';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/book" element={<BookPage />} />
        <Route path="/subjectPage" element={<SubjectPage />} />
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
