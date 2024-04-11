import { Routes, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import BookPage from '../pages/BookPage';
import SubjectPage from '../pages/SubjectPage';
import ClassPage from '../pages/ClassPage';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route exact path="/subjects" element={<SubjectPage />} />
        <Route path="/subjects/:grade" element={<SubjectPage />} />
        <Route path="/subjects/:bookId" element={<BookPage />} />
        <Route path="/classPage" element={<ClassPage />} />
      </Route>
    </Routes>
  );
}

export default App;
