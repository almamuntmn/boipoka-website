import Bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96 my-10">
            <div className="hero-content flex-col lg:flex-row-reverse py-10 px-5 md:py-16 md:px-12 lg:py-20 lg:px-32">
                <img
                    src={Bookimg}
                    className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl"
                />
                <div className="mt-6 md:mt-0 lg:mr-20 text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-5">
                        Books to freshen up your bookshelf
                    </h1>
                    <button className="btn bg-[#23BE0A]">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
