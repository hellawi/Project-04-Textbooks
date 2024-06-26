import { Routes, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import BookPage from '../pages/BookPage';
import SubjectPage from '../pages/SubjectPage';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/subjects" element={<SubjectPage />} />
        <Route path="/subjects/class/:grade" element={<SubjectPage />} />
        <Route path="/subjects/class/:grade/:subject" element={<SubjectPage />} />
        <Route path="/subjects/:bookId" element={<BookPage />} />
      </Route>
    </Routes>
  );
}

export default App;
