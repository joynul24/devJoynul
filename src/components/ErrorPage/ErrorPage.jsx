const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#333646] px-6">
            <div className="text-center">
                <h1 className="text-7xl font-extrabold text-red-400 animate-bounce">404</h1>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
                    Oops! Page not found
                </h2>
                <p className="mt-2 text-gray-200">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="inline-block px-6 py-3 bg-[#FFAF22] text-white text-sm font-medium rounded-lg shadow-md hover:bg-[#d4a554] transition"
                    >
                        ← Go back home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
