import React, { Component } from 'react';

class BookDisplay extends Component {
    constructor() {
        super();
        this.state = {
            Books: []
        }
    }

    componentDidMount() {
        fetch('/api/books')
            .then(res => res.json())
            .then(books => this.setState({ books }, () => console.log('Customers fetched..', books)))
    }

    render() {
        return (
            <div className="">
                <h2>Books</h2>
                <ul>
                    {this.state.Books.map(book =>
                        <li key={book.name}>{book.author}</li>)}
                </ul>
            </div>
        );
    }
}

export default BookDisplay;