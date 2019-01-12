import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((books, i) => {
                    return <BookCard
                        key={i}
                        image={books.volumeInfo.imageLinks.thumbnail}
                        title={books.volumeInfo.title}
                        author={books.volumeInfo.authors}
                        published={books.volumeInfo.publishedDate}
                        description={books.volumeInfo.description}
                        buy={books.volumeInfo.saleInfo}

                    />
                })
            }

        </div>
    )
}

export default BookList;