import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';


const ListedBooks = () => {
    const [readList, setReadList]= useState([]);
    const [wishList, setWishList]= useState([]);
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadListInt, 'storedReadListInt');

        const readListBooks = data.filter(book => storedReadListInt.includes(book.bookId));
        console.log(readListBooks, 'readListBooks');

        const storedWishList = getStoredReadList('wih-list');
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        console.log(storedWishListInt, 'storedWishListInt');

        const wishListBooks = data.filter(book => storedWishListInt.includes(book.bookId));
        console.log(wishListBooks, 'wishListBooks');

        // For demonstration, logging the stored read list
        console.log(storedReadList, 'storedReadList');
        // You can perform any side effects or data processing here if needed
        setReadList(readListBooks);
        setWishList(wishListBooks);
    }, [data]);
    return (
        <div>
            <h2>Listed Books</h2>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I've Read {readList.length}</h2>
                    <ul>
                        {
                            readList.map(book => <Book key={book.bookId} book={book} />)
                        }
                    </ul>
                </TabPanel>
                <TabPanel>
                    <h2>Books I Want to Read {wishList.length}</h2>
                    <ul>
                        {wishList.map(book => (
                            <Book key={book.bookId} book={book} />
                        ))}
                    </ul>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;