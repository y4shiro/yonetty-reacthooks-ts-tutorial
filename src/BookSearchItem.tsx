import React from 'react';
import { BookDescription } from './BookDescription';

type bookSearchItemProps = {
  description: BookDescription;
  onBookAdd: (book: BookDescription) => void;
};

const BookSearchItem = (props: bookSearchItemProps) => {
  const { title, authors, thumbnail } = props.description;

  const handleAddBookClick = () => {
    props.onBookAdd(props.description);
  };

  return <div className="book-search-item"></div>;
};

export default BookSearchItem;
