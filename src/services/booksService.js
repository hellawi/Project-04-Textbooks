import axios from 'axios';

export function getAllBooksService(params) {
  return axios.get('/books', {
    params,
  });
}

export function createBookService(data) {
  return axios.post('/books', data);
}

export function findBookById(bookId) {
  return axios.get(`/books/${bookId}`);
}

export function updateBookService(bookId, data) {
  return axios.put(`/books/${bookId}`, data);
}

export function deleteBookService(bookId, data) {
  return axios.delete(`/books/${bookId}`, data);
}