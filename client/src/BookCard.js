import React from 'react';
var Button = require('react-bootstrap').Alert;



const BookCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
                <h1>{props.title}</h1>
                <h2>{props.author}</h2>
                <h3>{props.published}</h3>
                <p>{props.description}</p>

            </div>




            <div className="buy-button">
                <form onSubmit={props.buy} action="">
                    <button type="submit">Buy</button>
                </form>
            </div>

            <div className="save-button">
                <form onSubmit={props.saveBook} action="">
                    <button type="submit">Save to Bookshelf</button>
                </form>
            </div>
        </div>
    )
}

export default BookCard;