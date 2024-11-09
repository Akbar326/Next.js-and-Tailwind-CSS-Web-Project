export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
                404
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
                Page Not Found
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-center">
                Sorry, the page you are looking for does not exist.
            </p>
        </div>
    );
}
