import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(item => item.bookId === id);
    console.log(data, book);

    const { bookName, image, author, tags, category, review, totalPages, publisher, yearOfPublishing, rating } = book || {};

    return (
        <div className="hero min-h-screen mb-20 px-4 md:px-8 lg:px-16">
            <div className="hero-content flex-col lg:flex-row gap-6 md:gap-10 items-start">
                <img
                    src={image}
                    className="w-full md:w-2/3 lg:w-1/2 max-h-[500px] md:max-h-[600px] lg:max-h-[700px] rounded-lg shadow-2xl p-6 md:p-10 lg:p-10 bg-slate-200"
                    alt={bookName}
                />
                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{bookName}</h1>
                    <h2 className="text-lg md:text-xl font-light mt-4">Author: {author}</h2>
                    
                    <div className="divider"></div>
                    <p><span className="font-semibold">Category:</span> {category}</p>
                    
                    <div className="divider"></div>
                    <p className="font-light">
                        <span className="font-semibold text-orange-400">Review:</span> {review}
                    </p>
                    
                    <div className="card-actions justify-start my-4 flex flex-wrap">
                        {tags?.map(tag => (
                            <div
                                className="text-green-300 mr-2 mb-2 bg-slate-600 py-1 px-3 rounded-full text-sm md:text-base"
                                key={tag}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    
                    <div className="divider"></div>
                    <p className="mb-2"><span className="font-semibold">Total Pages:</span> {totalPages}</p>
                    <p className="mb-2"><span className="font-semibold">Publisher:</span> {publisher}</p>
                    <p className="mb-2"><span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}</p>
                    <p className="mb-2"><span className="font-semibold">Rating:</span> {rating}</p>
                    
                    <div className="divider"></div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="btn btn-outline btn-success w-full sm:w-auto">Read</button>
                        <button className="btn btn-info w-full sm:w-auto">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
