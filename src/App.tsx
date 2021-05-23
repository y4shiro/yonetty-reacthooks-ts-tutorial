import React, { useState } from 'react';
import './App.css';
import { BookToRead } from './BookToRead';
import BookRow from './BookRow';
import { idText } from 'typescript';

const dummyBooks: BookToRead[] = [
  {
    id: 1,
    title: 'はじめてのReact',
    authors: 'ダミー',
    memo: '',
  },
  {
    id: 2,
    title: 'React Hooks入門',
    authors: 'ダミー',
    memo: '',
  },
  {
    id: 3,
    title: '実践Reactアプリケーション開発',
    authors: 'ダミー',
    memo: '',
  },
];

const App = () => {
  const [books, setBooks] = useState(dummyBooks);

  const handleBookDelete = (id: number) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const handleBookMemoChange = (id: number, memo: string) => {
    const newBooks = books.map((book) => {
      return book.id === id ? { ...book, memo: memo } : book;
    });
    setBooks(newBooks);
  };

  const bookRows = books.map((book) => {
    return (
      <BookRow
        book={book}
        key={book.id}
        onMemoChange={(id, memo) => handleBookMemoChange(id, memo)}
        onDelete={(id) => handleBookDelete(id)}
      />
    );
  });

  return (
    <div className="App">
      <section className="nav">
        <h1>読みたい本リスト</h1>
        <div className="button-like">本を追加</div>
      </section>
      <section className="main">{bookRows}</section>
    </div>
  );
};

export default App;
