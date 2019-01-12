import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data);
            })
    }

    componentDidMount() {
        fetch('/api/books')
            .then(res => res.json())
            .then(books => this.setState({ books }, () => console.log('Customers fetched..', books)))
    }

    handleSearch = (e) => {
        console.log(e.target.value);
        this.setState({ searchField: e.target.value })
    }

    render() {
        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} componentDidMount={this.componentDidMount} />
            </div>
        );
    }
}

export default Books;