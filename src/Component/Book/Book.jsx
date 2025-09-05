const Book = ({ book }) => {

    const { bookName, image, author, tags, category } = book;
    return (
        <div className="card bg-base-100 w-[374px] shadow-sm border border-gray-300 p-6 mx-auto">
            <figure className="bg-slate-200 rounded-lg">
                <img className="h-[166px] py-6"
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className="card-actions justify-start mb-2">
                    {tags.map(tag => (
                        <div className="text-green-300 mr-3 bg-slate-600 py-1 px-4 rounded-full" key={tag}>{tag}</div>
                    ))}
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{author}</p>
                <div className="divider"></div>
                <div className="card-actions justify-between">
                    <div className="">{category}</div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;