import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
            .then(response => response.json())
            .then(data => setBooks(data))
            .then(data => console.log(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div>
            <h1 className="text-5xl font-semibold mb-4 text-center mb-8">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;