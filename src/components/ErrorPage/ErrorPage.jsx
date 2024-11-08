import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
            {/* Top White Section */}
            <div className="w-full py-10 bg-white text-gray-600">
                <h1 className="text-5xl font-bold">Oops!</h1>
            </div>

            {/* Middle Purple Section */}
            <div className="w-full py-16 bg-purple-700 text-white px-6">
                <h1 className="text-9xl font-extrabold mb-6">404</h1>
                <h2 className="text-4xl font-semibold mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg mb-10 max-w-lg mx-auto">
                    Sorry, the page you’re looking for doesn’t exist. But we can help you find your way back!
                </p>
                <Link
                    to="/"
                    className="bg-white text-purple-700 font-medium px-8 py-3 rounded-full shadow-lg transition-all hover:bg-purple-600 hover:text-white hover:scale-105"
                >
                    Return Home
                </Link>
            </div>

            {/* Bottom White Section */}
            <div className="w-full py-10 bg-white text-gray-600">
                <p className="text-sm">Need more help? Visit our <Link to="/buyingGuide" className="underline text-purple-700 hover:text-purple-500">Buying Guide</Link>.</p>
            </div>
        </div>
    );
};

export default ErrorPage;