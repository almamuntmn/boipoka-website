import Bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96 border border-gray-400 rounded-lg my-10">
            <div className="hero-content flex-col lg:flex-row-reverse py-20 px-32">
                <img
                    src={Bookimg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='lg:mr-20'>
                    <h1 className="text-5xl font-bold mb-5">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A]">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;